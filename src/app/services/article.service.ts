import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';
import { Article } from './interfaces/article/article.interface';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
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

  private _articles$ = new BehaviorSubject<PaginatedResult<Article> | null>(null);
  articles$ = this._articles$.asObservable();

  private _latestArticles$ = new BehaviorSubject<Article[] | null>(null);
  latestArticles$ = this._latestArticles$.asObservable();

  private _fullArticle$ = new BehaviorSubject<Article | null>(null);
  fullArticle$ = this._fullArticle$.asObservable();

  constructor() { }

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
      .pipe(
        catchError((err) => {
          this.alertSrv.error("Unable to load articles");
          return throwError(() => err);
        })
      )
      .subscribe((articles: PaginatedResult<Article>) => {
        this._articles$.next(articles);
      });
  }

  public getLatestThree(): void {
    this._latestArticles$.next(null);
    let headers = new HttpHeaders();
    headers = headers.set('show-spinner', 'false');

    this.http
      .get<Article[]>(`${environment.uri}/article/latest-three`, { headers: headers })
      .pipe(
        catchError((err) => {
          this.alertSrv.error("Unable to load articles");
          return throwError(() => err);
        })
      )
      .subscribe((articles: Article[]) => {
        this._latestArticles$.next(articles);
      });
  }

  public getFullArticle(articleId: string): void {
    this._fullArticle$.next(null);
    let headers = new HttpHeaders();
    headers = headers.set('show-spinner', 'false');

    this.http
      .get<Article>(`${environment.uri}/article/${articleId}`, { headers: headers })
      .pipe(
        catchError((err) => {
          console.log(err);
          this.alertSrv.error("Unable to load this article");
          return throwError(() => err);
        })
      )
      .subscribe((article: Article) => {
        this._fullArticle$.next(article);
      });
  }
}
