import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-title',
  standalone: true,
  imports: [],
  templateUrl: './article-title.component.html',
  styleUrl: './article-title.component.scss',
})
export class ArticleTitleComponent {
  @Input({ required: true }) category: string | null = null;

}
