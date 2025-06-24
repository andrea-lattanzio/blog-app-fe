import { animate, style, transition, trigger } from '@angular/animations';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService, UpdateArticleDto } from '../../services/article.service';
import { AuthService } from '../../services/auth.service';
import { Article } from '../../services/interfaces/article/article.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articleId = params.get('id');
      this.articleSrv.getFullArticle(this.articleId!);
      this.article$
        .pipe(takeUntilDestroyed(this.destroyed))
        .subscribe((article: Article | null) => {
          this.article = article;
          this.likes = this.article?.likes!;
        });
    });
  }

  getFirstLetter(name?: string): string {
    return name ? name.charAt(0).toUpperCase() : '';
  }

  handleLike(): void {
    const likeArticleDto: UpdateArticleDto = { likes: this.likes + 1 };
    this.articleSrv.update(this.articleId!, likeArticleDto).subscribe((_) => { this.likes++; });
  }
}
