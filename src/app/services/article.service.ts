import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';
import { User } from './interfaces/auth.service.interfaces';
import { Article } from './interfaces/article/article.interface';
import { BehaviorSubject } from 'rxjs';
import {
  PaginationQueryDto,
  PaginatedResult,
} from './interfaces/pagination/pagination.interface';
import { environment } from '../../environments/env';

export interface ArticlePaginationQueryDto extends PaginationQueryDto {
  tag?: string;
  sortBy?: string;
  titleContains?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly http = inject(HttpClient);
  private readonly authSrv = inject(AuthService);
  private readonly alertSrv = inject(AlertService);

  private _articles$ = new BehaviorSubject<PaginatedResult<Article> | null>(
    null
  );
  articles$ = this._articles$.asObservable();

  private _latestArticles$ = new BehaviorSubject<Article[]>([]);
  latestArticles$ = this._latestArticles$.asObservable();

  constructor() {}

  public findAll(paginationParams: ArticlePaginationQueryDto): void {
    this._articles$.next(null);
    let params = new HttpParams();
    let headers = new HttpHeaders();
    headers = headers.set('show-spinner', 'false');

    for (const key in paginationParams) {
      const value = paginationParams[key as keyof ArticlePaginationQueryDto];
      if (value) params = params.set(key, value);
    }

    this.http
      .get<PaginatedResult<Article>>(`${environment.uri}/article`, {
        headers: headers,
        params: params,
      })
      .subscribe((articles: PaginatedResult<Article>) => {
        this._articles$.next(articles);
      });
  }

  public getLatestThree(): void {
    let headers = new HttpHeaders();
    headers = headers.set('show-spinner', 'false');

    this.http
      .get<Article[]>(`${environment.uri}/article/latest-three`, {
        headers: headers,
      })
      .subscribe((articles: Article[]) => {
        this._latestArticles$.next(articles);
      });
  }
}
