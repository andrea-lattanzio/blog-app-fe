import { Component, inject, OnInit } from '@angular/core';
import {
  ButtonComponent,
  ButtonInput,
} from '../../components/button/button.component';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from '../../components/form-error/form-error.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly fb = inject(NonNullableFormBuilder);
  public registerForm!: FormGroup;

  buttonInputs: ButtonInput = {
    type: 'submit',
    icon: 'bi bi-box-arrow-in-right',
    text: 'Sign up',
    styles: 'w-full font-semibold font-poppins mt-4',
  };
  googleButtonInputs: ButtonInput = {
    icon: 'bi bi-google',
    text: 'Sign up with Google',
    styles: 'font-semibold font-poppins',
  };

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        lastname: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$'
            ),
          ],
        ],
      },
      { updateOn: 'submit' }
    );
  }

  handleRegister(): void {}

  handleGoogleRegister(): void {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  hasError(control: string): boolean {
    return (
      this.registerForm.controls[control].invalid &&
      this.registerForm.controls[control].touched
    );
  }

  getError(control: string): ValidationErrors | null {
    const errors = this.registerForm.controls[control].errors;
    return errors;
  }
}
