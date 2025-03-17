import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../services/interfaces/auth.service.interfaces';
import { ButtonComponent, ButtonInput } from '../button/button.component';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss',
})
export class ProfileSectionComponent {
  likedButtonOptions: ButtonInput = {
    text: 'Liked Articles',
    icon: 'bi bi-heart-fill',
    styles: 'w-full font-poppins text-lg',
  };
  savedButtonOptions: ButtonInput = {
    text: 'Saved Articles',
    icon: 'bi bi-bookmark-fill',
    styles: 'w-full font-poppins text-lg',
  };
  logoutButtonOptions: ButtonInput = {
    text: 'Logout',
    icon: 'bi-box-arrow-right',
    styles: 'w-full font-poppins text-lg',
  };
  deleteProfileButtonOptions: ButtonInput = {
    text: 'Delete profile',
    icon: 'bi-person-fill-x',
    styles: '!border-red-700 !text-red-700 w-full font-poppins text-lg',
  };
  @Input() user!: User | null;
}
