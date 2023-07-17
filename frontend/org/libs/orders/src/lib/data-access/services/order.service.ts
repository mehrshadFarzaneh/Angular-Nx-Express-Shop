import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@org/app-config';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/order.model';
import { ProductModel } from 'libs/products/src/lib/data-access/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ServiceAPI = 'orders';
  ServiceAPIForProducts = 'products';
  API_URL = "";
  API_URL_For_Products = "";
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient
  ) {
    this.API_URL = appConfig.apiUrl + this.ServiceAPI;
    this.API_URL_For_Products = appConfig.apiUrl + this.ServiceAPIForProducts;
  }

  getOrders():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL);
  }

  getOrdersById(orderId: string) {
  return this.http.get(this.API_URL + "/" + orderId)
  }

  editOrders(order: OrderModel):Observable<OrderModel> {
    return this.http.put(this.API_URL + "/" + order.id,order)
  }

  addOrder(category: OrderModel):Observable<OrderModel> {
    return this.http.post(this.API_URL ,category)
  }

  deleteOrder(id: string) {
    return this.http.delete(this.API_URL+ "/" + id);
  }


  // Corresponding
  getProductById(productId: string):Observable<ProductModel> {
    return this.http.get(this.API_URL_For_Products + "/" + productId)
  }
}
