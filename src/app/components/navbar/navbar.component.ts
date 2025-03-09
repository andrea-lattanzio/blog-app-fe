import { Component } from '@angular/core';
import { NavlinksComponent } from '../navlinks/navlinks.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavlinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
