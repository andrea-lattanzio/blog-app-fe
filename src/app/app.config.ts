import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { routes } from './app.routes';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { authInterceptor } from './interceptors/auth.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    HttpClientModule,
    provideHttpClient(withInterceptors([authInterceptor, loadingInterceptor])),
    BrowserModule,
  ],
};
