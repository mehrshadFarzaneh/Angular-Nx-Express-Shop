import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@org/app-config';
import { UserModel } from '@org/users';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenLocalStorageService } from './token-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ServiceAPI = 'users';
  API_URL = "";
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient,
    private token: TokenLocalStorageService,
    private router: Router
  ) {
    this.API_URL = appConfig.apiUrl + this.ServiceAPI;
  }
  login(email: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.API_URL}/login`, { email, password });
  }

  logout() {
    this.token.removeToken();
    // this.router.navigate(['/login']);
  }
}
