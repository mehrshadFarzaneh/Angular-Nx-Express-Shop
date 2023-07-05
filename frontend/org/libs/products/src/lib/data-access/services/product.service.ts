import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "@org/app-config";
import { Observable } from "rxjs";
import { ProductModel } from "../model/product.model";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ServiceAPI = 'products';
  API_URL = "";
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient
  ) {
    this.API_URL = appConfig.apiUrl + this.ServiceAPI;
  }

  getProducts(){
    return this.http.get(this.API_URL + "/with-category-name");
  }

  getProductById(productId: string) {
    return this.http.get(this.API_URL + "/" + productId)
  }

  editProduct(product: ProductModel):Observable<ProductModel> {
    return this.http.put(this.API_URL + "/" + product.id,product)
  }

  addProduct(product: ProductModel):Observable<ProductModel> {
    return this.http.post(this.API_URL ,product)
  }

  deleteProduct(id: string) {
    return this.http.delete(this.API_URL+ "/" + id);
  }
}
