import { Component, inject, Inject, OnInit, output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { CANCEL_BUTTON_OPTIONS, CONFIRM_BUTTON_OPTIONS } from '../../../constants/button.constants';

export interface ConfirmDialogOptions {
  message: string;
}

@Component({
    selector: 'app-confirm-delete-dialog',
    imports: [ButtonComponent],
    templateUrl: './confirm-delete-dialog.component.html',
    styleUrl: './confirm-delete-dialog.component.scss'
})
export default class ConfirmDeleteDialogComponent {
  private readonly router = inject(Router);
  public dialogRef = inject(MatDialogRef<ConfirmDeleteDialogComponent>);
  public data = inject(MAT_DIALOG_DATA) as ConfirmDialogOptions;

  public cancelButtonOptions = CANCEL_BUTTON_OPTIONS;
  public confirmButtonOptions = CONFIRM_BUTTON_OPTIONS;

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
