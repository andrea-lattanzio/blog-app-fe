import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { ArticleService } from '../../services/article.service';
import { ArticleCardSkeletonComponent } from '../../components/article-card-skeleton/article-card-skeleton.component';
import { AsyncPipe } from '@angular/common';
import { JoinNewsletterComponent } from '../../components/join-newsletter/join-newsletter.component';

@Component({
    selector: 'app-home',
    imports: [
        ButtonComponent,
        ArticleCardComponent,
        ArticleCardSkeletonComponent,
        AsyncPipe,
        JoinNewsletterComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly articlesSrv = inject(ArticleService);
  public articles$ = this.articlesSrv.latestArticles$;

  ngOnInit(): void {
    this.articlesSrv.getLatestThree();
  }
}
