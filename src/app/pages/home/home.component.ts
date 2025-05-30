import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { FormErrorComponent } from '../../components/form-error/form-error.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { SUBSCRIBE_BUTTON_OPTIONS } from '../../../constants/button.constants';
import { ArticleService } from '../../services/article.service';
import { ArticleCardSkeletonComponent } from '../../components/article-card-skeleton/article-card-skeleton.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
    ArticleCardComponent,
    ArticleCardSkeletonComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly articlesSrv = inject(ArticleService);
  public articles$ = this.articlesSrv.latestArticles$;

  private readonly fb = inject(NonNullableFormBuilder);
  public newsletterForm!: FormGroup;
  subscribeButtonOptions = SUBSCRIBE_BUTTON_OPTIONS;

  ngOnInit(): void {
    this.articlesSrv.getLatestThree();
    this.newsletterForm = this.fb.group(
      {
        email: ['', Validators.required, Validators.email],
      },
      { updateOn: 'submit' }
    );
  }

  handleNewsletterSubscription(): void {
    if (this.newsletterForm.invalid) return;
  }

  hasError(control: string): boolean {
    return (
      this.newsletterForm.controls[control].invalid &&
      this.newsletterForm.controls[control].touched
    );
  }

  getError(control: string): ValidationErrors | null {
    const errors = this.newsletterForm.controls[control].errors;
    return errors;
  }
}
