import { Component, inject, Input } from '@angular/core';
import { Article } from '../../services/interfaces/article/article.interface';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  imports: [DatePipe],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() article!: Article;
  private readonly router = inject(Router);

  handleArticleClick(): void {
    this.router.navigate([`article/${this.article.id}`]);
  }
}
