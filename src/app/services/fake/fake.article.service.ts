import { inject, Injectable } from '@angular/core';
import fakeArticles from '../../../assets/data/articles/angularArticles';
import { Article } from '../interfaces/article/article.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/env';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private _articles$ = new BehaviorSubject<Article[]>([]);
  articles$ = this._articles$.asObservable();
  private httpClient = inject(HttpClient);

  constructor() {
    this.getFakeArticles();
  }

  getArticles(): void {
    this.httpClient
      .get<Article[]>(`${environment.uri}/articles`)
      .subscribe((articles) => {
        this._articles$.next(articles);
      });
  }

  getFakeArticles(): void {
    this._articles$.next(fakeArticles);
  }

  getArticleById(id: string) {
    const article = fakeArticles.find((a) => a.id === id);
    this._articles$.next([article!]);
  }
}
