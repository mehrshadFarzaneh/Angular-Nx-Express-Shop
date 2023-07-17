import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { APP_CONFIG } from "@org/app-config";
import { Observable, map } from "rxjs";
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

  getProducts(categoriesFilter?: string[]): Observable<ProductModel[]> {
    let params = new HttpParams();
    if (categoriesFilter) {
      params = params.append('categories', categoriesFilter.join(','));
    }
    return this.http.get<ProductModel[]>(this.API_URL, { params: params });
  }

  getProductById(productId: string) {
    return this.http.get(this.API_URL + "/" + productId)
  }

  editProduct(product: ProductModel,productData :FormData):Observable<ProductModel> {
    return this.http.put(this.API_URL + "/" + product.id,productData)
  }

  addProduct(productData: FormData):Observable<ProductModel> {
    return this.http.post(this.API_URL ,productData)
  }

  deleteProduct(id: string) {
    return this.http.delete(this.API_URL+ "/" + id);
  }

  getProductsCount(): Observable<number> {
    return this.http
      .get<number>(`${this.API_URL}/get/count`)
      .pipe(map((objectValue: any) => objectValue.productCount));
  }

  getFeaturedProducts(count: number): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.API_URL}/get/featured/${count}`);
  }
}
