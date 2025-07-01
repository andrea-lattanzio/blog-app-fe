import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleTitleComponent } from '../../components/article-title/article-title.component';
import { animate, style, transition, trigger } from '@angular/animations';
import {
  ArticlePaginationQueryDto,
  ArticleService,
} from '../../services/article.service';
import { ArticleCardSkeletonComponent } from '../../components/article-card-skeleton/article-card-skeleton.component';
import { ArticleSearchComponent } from '../../components/article-search/article-search.component';

@Component({
    selector: 'app-articles',
    imports: [
        AsyncPipe,
        ArticleCardComponent,
        MatIconModule,
        ArticleTitleComponent,
        NgClass,
        ArticleCardSkeletonComponent,
        ArticleSearchComponent,
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
    ]
})
export class ArticlesComponent implements OnInit {
  private readonly articleSrv = inject(ArticleService); // to fetch articles
  private readonly route = inject(ActivatedRoute); // takes current path param
  private readonly cdr = inject(ChangeDetectorRef); // trigger change detection
  private readonly router = inject(Router); // navigates to article detail

  public category: string = '';
  public trigger: string = '';
  public articles$ = this.articleSrv.articles$; // article observable

  /**
   * When component loads it subscribes to route parameters observable
   * When the observable emits the articles are refreshed with a base query containing the tag only
   * This refresh happens only when going from one page to another
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category')!;
    });
  }

  /**
   * This method is used to refresh articles:
   * - whenever route param changes
   * - when articleSearchComponent emits
   *
   * @param query Query params to filter articles
   */
  refreshArticles(query: ArticlePaginationQueryDto): void {
    // re-triggers animation
    this.cdr.markForCheck();
    this.trigger = this.category;

    // refresh articles
    this.articleSrv.findAll(query);
  }

  handleArticleClick(articleId: string): void {
    this.router.navigate([`article/${articleId}`]);
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
