import { Component, Input } from '@angular/core';
import { User } from '../../services/interfaces/auth.service.interfaces';
import { ButtonComponent } from '../button/button.component';
import {
  DELETE_PROFILE_BUTTON_OPTIONS,
  LIKED_BUTTON_OPTIONS,
  LOGOUT_BUTTON_OPTIONS,
  SAVED_BUTTON_OPTIONS,
} from '../../../constants/button.constants';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss',
})
export class ProfileSectionComponent {
  @Input() user!: User | null;
  likedButtonOptions = LIKED_BUTTON_OPTIONS;
  savedButtonOptions = SAVED_BUTTON_OPTIONS;
  logoutButtonOptions = LOGOUT_BUTTON_OPTIONS;
  deleteProfileButtonOptions = DELETE_PROFILE_BUTTON_OPTIONS;
}
