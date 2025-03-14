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
import { FormErrorComponent } from '../../components/form-error/form-error.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoginRequestBody } from '../../services/interfaces/auth.service.interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly fb = inject(NonNullableFormBuilder);
  public loginForm!: FormGroup;
  private readonly authService = inject(AuthService);
  loginButtonInputs: ButtonInput = {
    type: 'submit',
    icon: 'bi bi-box-arrow-in-right',
    text: 'Login',
    styles: 'w-full font-semibold font-poppins mt-2',
  };
  googleButtonInputs: ButtonInput = {
    icon: 'bi bi-google',
    text: 'Login with Google',
    styles: 'font-semibold font-poppins',
  };

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      },
      { updateOn: 'submit' }
    );
  }

  handleLogin(): void {
    if (this.loginForm.invalid) return;
    this.authService
      .authenticate<LoginRequestBody>('login', { ...this.loginForm.value })
      .subscribe(() => {
        this.navigate('/');
      });
    this.loginForm.reset();
  }

  handleGoogleLogin(): void {
    console.log('sas');
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  hasError(control: string): boolean {
    return (
      this.loginForm.controls[control].invalid &&
      this.loginForm.controls[control].touched
    );
  }

  getError(control: string): ValidationErrors | null {
    const errors = this.loginForm.controls[control].errors;
    return errors;
  }
}
