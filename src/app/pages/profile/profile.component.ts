import { Component, inject } from '@angular/core';
import { ProfileSectionComponent } from '../../components/profile-section/profile-section.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileSectionComponent, CommonModule, ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  authService = inject(AuthService);
  currentUser$ = this.authService.currentUser$;
}
