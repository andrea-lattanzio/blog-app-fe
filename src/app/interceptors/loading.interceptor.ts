import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  const showSpinner = req.headers.get('show-spinner') !== 'false';
  if (showSpinner) loadingService.show();
  return next(req).pipe(
    finalize(() => {
      if (showSpinner) loadingService.hide();
    })
  );
};
