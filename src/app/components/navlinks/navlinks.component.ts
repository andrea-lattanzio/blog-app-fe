import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navlinks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navlinks.component.html',
  styleUrl: './navlinks.component.scss',
})
export class NavlinksComponent {
  public constructor(private readonly router: Router) {}

  public navigate(route: string): void {
    this.router.navigate([route]);
  }
}
