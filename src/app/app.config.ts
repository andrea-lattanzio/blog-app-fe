import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideHighlightOptions } from 'ngx-highlightjs';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    }),
    provideHttpClient(withInterceptors([authInterceptor, loadingInterceptor])),
    BrowserModule,
    importProvidersFrom(MatNativeDateModule),
    provideAnimations(),
  ],
};
