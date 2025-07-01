import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ButtonComponent, ButtonOptions } from '../button/button.component';
import { SUBSCRIBE_BUTTON_OPTIONS } from '../../../constants/button.constants';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { FormErrorComponent } from '../form-error/form-error.component';
import { NewsletterService } from '../../services/newsletter.service';
import { AlertService } from '../../services/alert.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
    selector: 'app-join-newsletter',
    imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent
],
    templateUrl: './join-newsletter.component.html',
    styleUrl: './join-newsletter.component.scss'
})
export class JoinNewsletterComponent implements OnInit {
  public readonly subscribeButtonOptions: ButtonOptions =
    SUBSCRIBE_BUTTON_OPTIONS;
  private readonly fb = inject(NonNullableFormBuilder);
  subscribeForm!: FormGroup;
  private readonly newsletterSrv = inject(NewsletterService);
  private readonly alertSrv = inject(AlertService);
  private readonly destroyed = inject(DestroyRef);

  ngOnInit(): void {
    this.subscribeForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  handleSubscription(): void {
    if (this.subscribeForm.invalid) return;
    this.newsletterSrv
      .createSub({ ...this.subscribeForm.value })
      .pipe(takeUntilDestroyed(this.destroyed))
      .subscribe(() => this.alertSrv.success('You subscribed succesfully! 🤗'));
    this.subscribeForm.reset();
  }

  hasError(control: string): boolean {
    return (
      this.subscribeForm.controls[control].invalid &&
      this.subscribeForm.controls[control].touched
    );
  }

  getError(control: string): ValidationErrors | null {
    const errors = this.subscribeForm.controls[control].errors;
    return errors;
  }
}
