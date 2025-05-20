import { Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { ArticleService } from '../../services/fake/fake.article.service';
import { CommonModule } from '@angular/common';
import { Article } from '../../services/interfaces/article/article.interface';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [
    MatIconModule,
    ArticleCardComponent,
    CommonModule,
    ArticleCardComponent,
  ],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss',
})
export class ReactComponent {
  constructor(private readonly articleSrv: ArticleService) {}

  public articles$ = this.articleSrv.articles$;
}
