import { inject, Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/env';
import { HttpClient } from '@angular/common/http';

export interface CreateNewsletterSubscriptionDto {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private readonly http = inject(HttpClient);
  private readonly alertSrv = inject(AlertService);
  private readonly router = inject(Router);

  public createSub(requestBody: CreateNewsletterSubscriptionDto) {
    return this.http
      .post(`${environment.uri}/newsletter-subscription`, requestBody)
      .pipe(
        catchError((err) => {
          this.alertSrv.error('Subscription failed!');
          return throwError(() => err);
        })
      );
  }
}
