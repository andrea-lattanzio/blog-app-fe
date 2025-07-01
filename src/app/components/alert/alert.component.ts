import { AsyncPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
} from '@angular/core';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface Alert {
  type: AlertType;
  message: string;
  duration: number;
}

interface AlertClasses {
  [key: string]: string;
}

@Component({
    selector: 'app-alert',
    imports: [AsyncPipe, NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './alert.component.html',
    styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input({ required: true }) alerts: Alert[] | null = [];
  close = output<Alert>();

  private readonly alertClasses: AlertClasses = {
    info: 'border-blue-500 bg-blue-100 text-blue-800',
    success: 'border-green-500 bg-green-100 text-green-800',
    warning: 'border-yellow-500 bg-yellow-100 text-yellow-800',
    error: 'border-red-500 bg-red-100 text-red-800',
  };

  getAlertClass(type: string): string {
    return (
      this.alertClasses[type] || 'border-gray-500 bg-gray-100 text-gray-800'
    );
  }

  getAlertIcon(type: AlertType): string {
    switch (type) {
      case 'success':
        return 'bi-check-lg';
      case 'info':
        return 'bi-info-circle-fill';
      case 'warning':
        return 'bi-info-circle-fill';
      case 'error':
        return 'bi bi-exclamation-diamond-fill';
      default:
        return 'bi-info-circle-fill';
    }
  }

  closeAlert(alert: Alert) {
    this.close.emit(alert);
  }
}
