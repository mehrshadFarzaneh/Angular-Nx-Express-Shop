import { CanActivateFn, Router } from '@angular/router';
import { TokenLocalStorageService } from './data-access/services/token-local-storage.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const tokenLocalStorageService = inject(TokenLocalStorageService);
  const router = inject(Router);
  const token = tokenLocalStorageService.getToken();

    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (tokenDecode.isAdmin && !tokenLocalStorageService._tokenExpired(tokenDecode.exp)) return true;
    }

    router.navigate(['/login']);
    return false;
};
