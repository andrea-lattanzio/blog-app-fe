import { Component, inject, Input } from '@angular/core';
import { User } from '../../../services/interfaces/auth.service.interfaces';
import { ButtonComponent } from '../../../components/button/button.component';
import {
  DELETE_PROFILE_BUTTON_OPTIONS,
  LIKED_BUTTON_OPTIONS,
  LOGOUT_BUTTON_OPTIONS,
  SAVED_BUTTON_OPTIONS,
} from '../../../../constants/button.constants';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import ConfirmDeleteDialogComponent from '../../../components/confirm-delete-dialog/confirm-delete-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [ButtonComponent, MatDialogModule, CommonModule],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss',
})
export class ProfileSectionComponent {
  @Input() user!: User | null;
  likedButtonOptions = LIKED_BUTTON_OPTIONS;
  savedButtonOptions = SAVED_BUTTON_OPTIONS;
  logoutButtonOptions = LOGOUT_BUTTON_OPTIONS;
  deleteProfileButtonOptions = DELETE_PROFILE_BUTTON_OPTIONS;
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  public user$ = this.authService.currentUser$;

  handleLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  public showConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: { message: 'Are you sure you want to delete your account?' },
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.authService.logout();
      this.authService.deleteProfile();
      this.router.navigate(['/']);
    });

  }
}
