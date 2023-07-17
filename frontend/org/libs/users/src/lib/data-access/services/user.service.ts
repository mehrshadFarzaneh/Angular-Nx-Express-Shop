import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "@org/app-config";
import { UserModel } from "../models/user.model";
import { Observable } from "rxjs";
import { UserFacade } from "@org/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ServiceAPI = 'users';
  API_URL = "";
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient,
    private userFacade: UserFacade
  ) {
    this.API_URL = appConfig.apiUrl + this.ServiceAPI;
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  getUserById(userId: string) {
    return this.http.get(this.API_URL + "/" + userId);
  }

  editUser(user: UserModel): Observable<UserModel> {
    return this.http.put(this.API_URL + "/" + user.id, user);
  }

  addUser(user: UserModel): Observable<UserModel> {
    return this.http.post(this.API_URL, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.API_URL + "/" + id);
  }
  initAppSession() {
    this.userFacade.init();
  }

  observeCurrentUser() {
    return this.userFacade.user$;
  }

  isCurrentUserAuth() {
    return this.userFacade.isAuthenticated$;
  }
}
