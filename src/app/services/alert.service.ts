import { Injectable } from '@angular/core';
import { BehaviorSubject, take, timer } from 'rxjs';
import { Alert } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private _alerts$ = new BehaviorSubject<Alert[]>([]);
  alerts$ = this._alerts$.asObservable();

  info(message: string, duration: number = 3000) {
    const alert: Alert = { type: 'info', message, duration };
    this._alerts$.next([...this._alerts$.value, alert]);
    this.scheduleRemoval(alert, duration);
  }

  success(message: string, duration: number = 3000) {
    const alert: Alert = { type: 'success', message, duration };
    this._alerts$.next([...this._alerts$.value, alert]);
    this.scheduleRemoval(alert, duration);
  }

  warning(message: string, duration: number = 3000) {
    const alert: Alert = { type: 'warning', message, duration };
    this._alerts$.next([...this._alerts$.value, alert]);
    this.scheduleRemoval(alert, duration);
  }

  error(message: string, duration: number = 3000) {
    const alert: Alert = { type: 'error', message, duration };
    this._alerts$.next([...this._alerts$.value, alert]);
    this.scheduleRemoval(alert, duration);
  }

  close(alert: Alert) {
    const index = this._alerts$.value.indexOf(alert);
    const alerts = structuredClone(this._alerts$.value);
    alerts.splice(index, 1);
    this._alerts$.next(alerts);
  }

  private scheduleRemoval(alert: Alert, duration: number) {
    timer(duration)
      .pipe(take(1))
      .subscribe(() => {
        this.close(alert);
      });
  }
}
