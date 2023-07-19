import { TokenLocalStorageService } from "@org/users";
import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '@org/app-config';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private tokenLocalStorageService:TokenLocalStorageService,
    @Inject(APP_CONFIG) private appConfig: any,
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenLocalStorageService.getToken();
    const isAPIUrl = request.url.startsWith(this.appConfig.apiUrl);

    if (token && isAPIUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
