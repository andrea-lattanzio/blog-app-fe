import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/fake/fake.article.service';
import { AsyncPipe } from '@angular/common';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../services/interfaces/article/article.interface';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [AsyncPipe, ArticleCardComponent, MatIconModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit {
  constructor(
    private readonly articleSrv: ArticleService,
    private readonly route: ActivatedRoute
  ) {}

  public articles$: Observable<Article[]> = this.articleSrv.articles$;
  public category: string | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
    })
  }
}
