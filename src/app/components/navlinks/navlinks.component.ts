import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navlinks',
    imports: [],
    templateUrl: './navlinks.component.html',
    styleUrl: './navlinks.component.scss'
})
export class NavlinksComponent {
  private readonly router = inject(Router);

  public navigate(category: string): void {
    this.router.navigate(['/articles', category]);
  }
}
