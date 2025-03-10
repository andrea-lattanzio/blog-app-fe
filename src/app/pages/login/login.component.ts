import { Component, inject } from '@angular/core';
import { ButtonComponent, ButtonInput } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly router = inject(Router);
  loginButtonInputs: ButtonInput = {
    type: 'submit',
    icon: 'bi bi-box-arrow-in-right',
    text: 'Login',
    styles: 'w-full font-semibold font-poppins',
  }
  googleButtonInputs: ButtonInput = {
    icon: 'bi bi-google',
    text: 'Login with Google',
    styles: 'font-semibold font-poppins',
  }

  handleLogin(): void {
    console.log('sas');
  }

  handleGoogleLogin(): void {
    console.log('sas');
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
