import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [AsyncPipe],
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

  public article$ = this.articleSrv.fullArticle$;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const articleId = params.get('id')!;
      this.articleSrv.getFullArticle(articleId);
    });
  }
}
