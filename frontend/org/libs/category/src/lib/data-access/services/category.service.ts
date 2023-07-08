import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "@org/app-config";
import { CategoryModel } from "../models/category.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  ServiceAPI = 'categories';
  API_URL = "";
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient
  ) {
    this.API_URL = appConfig.apiUrl + this.ServiceAPI;
  }

  getCategories():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL);
  }

  getCategoryById(categoryId: string) {
    return this.http.get(this.API_URL + "/" + categoryId)
  }

  editCategory(category: CategoryModel):Observable<CategoryModel> {
    return this.http.put(this.API_URL + "/" + category.id,category)
  }

  addCategory(category: CategoryModel):Observable<CategoryModel> {
    return this.http.post(this.API_URL ,category)
  }

  deleteCategory(id: string) {
    return this.http.delete(this.API_URL+ "/" + id);
  }
}
