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
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from '../../components/form-error/form-error.component';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestBody } from '../../services/interfaces/auth.service.interfaces';
import { LoadingService } from '../../services/loading.service';
import { AlertService } from '../../services/alert.service';
import {
  GOOGLE_BUTTON_OPTIONS,
  REGISTER_BUTTON_OPTIONS,
} from '../../../constants/button.constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-register',
    imports: [
        CommonModule,
        ButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        FormErrorComponent,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly fb = inject(NonNullableFormBuilder);
  public registerForm!: FormGroup;
  private readonly authService = inject(AuthService);
  private readonly alertService = inject(AlertService);
  registerButtonOptions = REGISTER_BUTTON_OPTIONS;
  googleButtonOptions = GOOGLE_BUTTON_OPTIONS;
  private readonly destroyed = inject(DestroyRef);

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

  handleRegister(): void {
    if (this.registerForm.invalid) return;
    this.authService
      .authenticate<RegisterRequestBody>('register', {
        ...this.registerForm.value,
      })
      .pipe(takeUntilDestroyed(this.destroyed))
      .subscribe(() => {
        this.alertService.success('Account created! Welcome 🎉');
        this.navigate('/');
      });
    this.registerForm.reset();
  }

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
