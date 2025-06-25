import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';
import { Article } from './interfaces/article/article.interface';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import {
  PaginationQueryDto,
  PaginatedResult,
} from './interfaces/pagination/pagination.interface';
import { environment } from '../../environments/env';
import { Chapter } from './interfaces/article/chapter.interface';

export interface ArticlePaginationQueryDto extends PaginationQueryDto {
  tag?: string;
  sortBy?: string;
  titleContains?: string;
}

export interface UpdateArticleDto {
  title?: string;
  description?: string;
  chapters?: Chapter;
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
          this.alertSrv.error(err.error.message);
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
          this.alertSrv.error(err.error.message);
          return throwError(() => err);
        })
      )
      .subscribe((article: Article) => {
        this._fullArticle$.next(article);
      });
  }

  public update(articleId: string, updatedData: UpdateArticleDto): Observable<Article> {
    return this.http
      .patch<Article>(`${environment.uri}/article/${articleId}`, updatedData)
      .pipe(
        catchError((err) => {
          this.alertSrv.error(err.error.message);
          return throwError(() => err);
        })
      );
  }

  public likeArticle(articleId: string): Observable<Article> {
    let headers = new HttpHeaders();
    headers = headers.set('show-spinner', 'false');

    return this.http
      .post<Article>(`${environment.uri}/article/like/${articleId}`, { headers })
      .pipe(
        catchError((err) => {
          this.alertSrv.error(err.error.message);
          return throwError(() => err);
        })
      );
  }
}
