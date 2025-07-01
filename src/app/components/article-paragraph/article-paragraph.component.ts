import { Component, Input } from '@angular/core';
import { Paragraph } from '../../services/interfaces/article/paragraph.interface';
import { CodeSectionComponent } from '../code-section/code-section.component';

@Component({
  selector: 'app-article-paragraph',
  standalone: true,
  imports: [CodeSectionComponent],
  templateUrl: './article-paragraph.component.html',
  styleUrl: './article-paragraph.component.scss'
})
export class ArticleParagraphComponent {
  @Input({ required: true }) paragraph!: Paragraph | null;
}
