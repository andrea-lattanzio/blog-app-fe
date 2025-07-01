import { animate, style, transition, trigger } from '@angular/animations';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { AuthService } from '../../services/auth.service';
import { Article } from '../../services/interfaces/article/article.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { ArticleSkeletonComponent } from '../../components/article-skeleton/article-skeleton.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgClass, ArticleSkeletonComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter, * => *', [
        style({ opacity: 0 }),
        animate('1200ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ArticleComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly articleSrv = inject(ArticleService);
  private readonly authSrv = inject(AuthService);

  private readonly destroyed = inject(DestroyRef);
  public article$ = this.articleSrv.fullArticle$;
  public article!: Article | null;
  private articleId!: string | null;
  public likes: number = 0;
  public liked!: boolean | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articleId = params.get('id');
      this.articleSrv.getFullArticle(this.articleId!);
      this.article$
        .pipe(takeUntilDestroyed(this.destroyed))
        .subscribe((article: Article | null) => {
          this.article = article;
          this.likes = this.article?._count?.likes!;
          this.liked = this.article?.liked!;
        });
    });
  }

  getFirstLetter(name?: string): string {
    return name ? name.charAt(0).toUpperCase() : '';
  }

  handleLike(): void {
    if (this.liked) {
      this.articleSrv.removeLike(this.articleId!).subscribe(() => {
        this.likes--;
        this.liked = false;
      });
    } else if (!this.liked) {
      this.articleSrv.addLike(this.articleId!).subscribe(() => {
        this.likes++;
        this.liked = true;
      });
    }
  }
}
