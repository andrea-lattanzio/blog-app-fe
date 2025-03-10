import { inject, Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../environments/env';
import {
  User,
  LoginRequestBody,
  RegisterRequestBody,
  LoginResponseBody,
} from './interfaces/auth.service.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly jwtService = inject(JwtService);
  private readonly http = inject(HttpClient);

  private _currentUser$ = new BehaviorSubject<User | null>(null);
  currentUser$ = this._currentUser$.asObservable();

  constructor() {
    if (this.jwtService.hasToken()) this.fetchUser();
  }

  private fetchUser() {
    let headers = new HttpHeaders();
    headers = headers.set('show-spinner', 'false');

    this.http
      .get<User>(`${environment.uri}/profile}`, { headers })
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
  ) {
    this.http
      .post<LoginResponseBody>(`${environment.uri}/${endpoint}}`, requestBody)
      .pipe(
        catchError((_) => {
          this.jwtService.removeToken();
          return of(null);
        }),
        tap((res: LoginResponseBody | null) => {
          this.jwtService.setToken(res!.token);
        }),
        tap((res: LoginResponseBody | null) => {
          this._currentUser$.next(res!.user);
        }),
        map((res: LoginResponseBody | null) => {
          res!.user;
        })
      );
  }

  isLoggedIn(): boolean {
    return this.jwtService.hasToken();
  }
}
