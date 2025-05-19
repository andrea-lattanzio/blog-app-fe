import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [MatIconModule, ArticleCardComponent],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss'
})
export class ReactComponent {

}
