import { inject, Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { environment } from '../../environments/env';
import {
  User,
  LoginRequestBody,
  RegisterRequestBody,
  LoginResponseBody,
} from './interfaces/auth.service.interfaces';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly jwtService = inject(JwtService);
  private readonly http = inject(HttpClient);
  private readonly alertService = inject(AlertService);

  private _currentUser$ = new BehaviorSubject<User | null>(null);
  currentUser$ = this._currentUser$.asObservable();

  constructor() {
    if (this.jwtService.hasToken()) this.fetchUser();
  }

  private fetchUser() {
    let headers = new HttpHeaders();
    headers = headers.set('show-spinner', 'false');

    this.http
      .get<User>(`${environment.uri}/auth`, { headers })
      .pipe(
        catchError((_) => {
          this.jwtService.removeToken();
          return of(null);
        })
      )
      .subscribe((user) => {
        this._currentUser$.next(user);
      });
  }

  public authenticate<T extends LoginRequestBody | RegisterRequestBody>(
    endpoint: 'login' | 'register',
    requestBody: T
  ): Observable<User> {
    return this.http
      .post<LoginResponseBody>(
        `${environment.uri}/auth/${endpoint}`,
        requestBody
      )
      .pipe(
        catchError((err) => {
          this.alertService.error(err.error.message);
          return throwError(() => err);
        }),
        tap((res: LoginResponseBody) => {
          this.jwtService.setToken(res.token);
          this._currentUser$.next(res.user);
        }),
        map((res: LoginResponseBody) => res.user)
      );
  }

  isLoggedIn(): boolean {
    return this.jwtService.hasToken();
  }

  logout(): void {
    this._currentUser$.next(null);
    this.jwtService.removeToken();
  }

  deleteProfile() {
    return this.http.delete(`${environment.uri}/auth`).pipe(
      catchError((err) => {
        this.alertService.error(err.error.message);
        return throwError(() => err);
      }),
      tap((_) => {
        this.logout();
      })
    );
  }
}
