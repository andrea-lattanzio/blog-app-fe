import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
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

import { AuthService } from '../../services/auth.service';
import { LoginRequestBody } from '../../services/interfaces/auth.service.interfaces';
import {
  GOOGLE_BUTTON_OPTIONS,
  LOGIN_BUTTON_OPTIONS,
} from '../../../constants/button.constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-login',
    imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent
],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly fb = inject(NonNullableFormBuilder);
  loginForm!: FormGroup;
  private readonly authService = inject(AuthService);
  loginButtonOptions = LOGIN_BUTTON_OPTIONS;
  googleButtonOptions = GOOGLE_BUTTON_OPTIONS;
  private readonly destroyed = inject(DestroyRef);

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
      .pipe(takeUntilDestroyed(this.destroyed))
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
