import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-article-title',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './article-title.component.html',
  styleUrl: './article-title.component.scss',
})
export class ArticleTitleComponent {
  @Input({ required: true }) category: string | null = null;
}
