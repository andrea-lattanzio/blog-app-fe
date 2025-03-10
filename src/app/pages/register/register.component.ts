import { Component, inject } from '@angular/core';
import { ButtonComponent, ButtonInput } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly router = inject(Router);
  buttonInputs: ButtonInput = {
    type: 'submit',
    icon: 'bi bi-box-arrow-in-right',
    text: 'Sign up',
    styles: 'w-full font-semibold font-poppins',
  };
  googleButtonInputs: ButtonInput = {
    icon: 'bi bi-google',
    text: 'Sign up with Google',
    styles: 'font-semibold font-poppins',
  }

  handleRegister(): void {}

  handleGoogleLogin(): void {
    
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
