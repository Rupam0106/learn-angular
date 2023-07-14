import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  if (localStorage.getItem('accessToken')) {
    return true;
  }

  return service.isInvalidLogin;
};
