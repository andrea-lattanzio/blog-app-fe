import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private apiCount = 0;
  private _loading$ = new BehaviorSubject<boolean>(false);
  loading$ = this._loading$.asObservable();

  show() {
    if (this.apiCount === 0) {
      this._loading$.next(true);
    }
    this.apiCount++;
  }

  hide() {
    this.apiCount--;
    if (this.apiCount === 0) {
      this._loading$.next(false);
    }
  }
}
