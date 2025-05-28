import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { ArticleService } from '../../services/fake/fake.article.service';
import { AsyncPipe } from '@angular/common';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../services/interfaces/article/article.interface';
import { ArticleTitleComponent } from '../../components/article-title/article-title.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [AsyncPipe, ArticleCardComponent, MatIconModule, ArticleTitleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements OnInit {
  constructor(
    private readonly articleSrv: ArticleService,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public articles$: Observable<Article[]> = this.articleSrv.articles$;
  public category: string | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      this.cdr.markForCheck();
    })
  }

  /**
   * This componnet has onPush change detection strategy.
   * It means that it will only check for changes when:
   * 1. Input properties change
   * 2. An event occurs in the component or one of its children
   * 3. An observable emits a new value (like paramMap$ or articles$)
   * In this case we mark the component for check when the route parameter change
   * and only this component and its children will be checked for changes.
   */
}
