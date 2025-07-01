import { Component, inject } from '@angular/core';
import { NavlinksComponent } from '../navlinks/navlinks.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavlinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly router = inject(Router);

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
