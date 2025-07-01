import { Component, Input } from '@angular/core';
import { Chapter } from '../../services/interfaces/article/chapter.interface';
import { ArticleParagraphComponent } from '../article-paragraph/article-paragraph.component';

@Component({
    selector: 'app-article-chapter',
    imports: [ArticleParagraphComponent],
    templateUrl: './article-chapter.component.html',
    styleUrl: './article-chapter.component.scss'
})
export class ArticleChapterComponent {
  @Input({ required: true }) chapter!: Chapter | null;
}
