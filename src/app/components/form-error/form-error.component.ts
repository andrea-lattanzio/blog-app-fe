
import { Component, Input, input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-form-error',
    imports: [],
    templateUrl: './form-error.component.html',
    styleUrl: './form-error.component.scss'
})
export class FormErrorComponent implements OnInit {
  @Input() error!: ValidationErrors | null;
  message: string = '';

  ngOnInit(): void {
    if (this.error) {
      const errorKey = Object.keys(this.error)[0] as keyof ValidationErrors;
      this.message = this.getErrorMessage(errorKey, this.error);
    }
  }

  getErrorMessage(
    errorKey: keyof ValidationErrors,
    errors: ValidationErrors
  ): string {
    switch (errorKey) {
      case 'required':
        return 'This field is required';
      case 'minlength':
        return `Minimum length required is ${errors['minlength'].requiredLength}`;
      case 'maxlength':
        return `Maximum length allowed is ${errors['maxlength'].requiredLength}`;
      case 'email':
        return 'Please enter a valid email address';
      case 'pattern':
        return 'Password must contain at least 8 characters, including uppercase, lowercase letters, and numbers ';
      default:
        return 'Invalid input';
    }
  }
}
