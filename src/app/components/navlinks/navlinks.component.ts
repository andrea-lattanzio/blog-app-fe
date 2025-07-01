import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-navlinks',
    imports: [RouterLink],
    templateUrl: './navlinks.component.html',
    styleUrl: './navlinks.component.scss'
})
export class NavlinksComponent {
  private readonly router = inject(Router);

  public navigate(category: string): void {
    this.router.navigate(['/articles', category]);
  }
}
