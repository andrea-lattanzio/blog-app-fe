import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { Article } from '../../services/interfaces/article/article.interface';
import { ArticleTitleComponent } from '../../components/article-title/article-title.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { ArticleService } from '../../services/article.service';
import { PaginatedResult } from '../../services/interfaces/pagination/pagination.interface';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    AsyncPipe,
    ArticleCardComponent,
    MatIconModule,
    ArticleTitleComponent,
    NgClass,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition(':enter, * => *', [
        style({ opacity: 0 }),
        animate('1200ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ArticlesComponent implements OnInit {
  constructor(
    private readonly articleSrv: ArticleService,
    private readonly loadingSrv: LoadingService,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public category: string | null = null;
  public trigger: string | null = null;

  combinedData$: Observable<{
    response: PaginatedResult<Article> | null;
    loading: boolean;
  }> = new Observable();

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cdr.markForCheck();
      this.category = params.get('category');
      this.trigger = this.category;
      this.getArticles();
    });
  }

  private getArticles(): void {
    this.articleSrv.findAll({ tag: this.category! });
    this.combinedData$ = combineLatest([
      this.articleSrv.articles$,
      this.loadingSrv.loading$,
    ]).pipe(map(([response, loading]) => ({ response, loading })));
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
