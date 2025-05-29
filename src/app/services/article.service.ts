import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';
import { User } from './interfaces/auth.service.interfaces';
import { Article } from './interfaces/article/article.interface';
import { BehaviorSubject } from 'rxjs';
import { PaginationQueryDto, PaginatedResult } from './interfaces/pagination/pagination.interface';
import { environment } from '../../environments/env';

interface ArticlePaginationQueryDto extends PaginationQueryDto {
  tag: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly http = inject(HttpClient);
  private readonly authSrv = inject(AuthService);
  private readonly alertSrv  = inject(AlertService);

  private _articles$ = new BehaviorSubject<PaginatedResult<Article> | null>(null);
  articles$ = this._articles$.asObservable();

  constructor() {}

  public findAll(paginationParams: ArticlePaginationQueryDto) {
    let params = new HttpParams();

    for(const key in paginationParams) {
      const value =  paginationParams[key as keyof ArticlePaginationQueryDto];
      if(value) params = params.set(key, value);
    }

    this.http
      .get<PaginatedResult<Article>>(`${environment.uri}/article`, { params: params })
      .subscribe((articles: PaginatedResult<Article>) => this._articles$.next(articles));
  }


}
