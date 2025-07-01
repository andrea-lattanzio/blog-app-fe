import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ARTICLE_TITLE_CONFIGS, ArticleTitleConfiguration } from './article.title.constants';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-article-title',
    imports: [MatIconModule, NgClass],
    templateUrl: './article-title.component.html',
    styleUrl: './article-title.component.scss'
})
export class ArticleTitleComponent {
  @Input({ required: true }) category: string | null = null;

  get config(): ArticleTitleConfiguration | undefined {
    return this.category ? ARTICLE_TITLE_CONFIGS[this.category] : undefined;
  }
}
