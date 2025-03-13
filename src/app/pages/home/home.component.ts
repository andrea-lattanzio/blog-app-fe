import { Component, inject, OnInit } from '@angular/core';
import {
  ButtonComponent,
  ButtonInput,
} from '../../components/button/button.component';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
    ArticleCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly fb = inject(NonNullableFormBuilder);
  public newsletterForm!: FormGroup;
  subscribeButtonInputs: ButtonInput = {
    type: 'submit',
    text: 'Subscribe',
    styles: 'w-full font-semibold font-playfair mt-2',
  };

  ngOnInit(): void {
    this.newsletterForm = this.fb.group(
      {
        email: ['', Validators.required, Validators.email],
      },
      { updateOn: 'submit' }
    );
  }

  handleNewsletterSubscription(): void {
    if(this.newsletterForm.invalid) return;
    
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
