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

@Component({
  selector: 'app-join-newsletter',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
  ],
  templateUrl: './join-newsletter.component.html',
  styleUrl: './join-newsletter.component.scss',
})
export class JoinNewsletterComponent implements OnInit {
  public readonly subscribeButtonOptions: ButtonOptions =
    SUBSCRIBE_BUTTON_OPTIONS;
  private readonly fb = inject(NonNullableFormBuilder);
  subscribeForm!: FormGroup;
  private readonly destroyed = inject(DestroyRef);

  ngOnInit(): void {
    this.subscribeForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  handleSubscription(): void {
    if(this.subscribeForm.invalid) return;
    // TODO richiamo metodo del service per aggiungere mail alla mailing list
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
