// import { UserModel } from '@org/users';
import {OrderItem} from "./order-item.model";

export class OrderModel {
  id?: string;
  orderItems?: OrderItem[];
  shippingAddress1?: string;
  shippingAddress2?: string;
  city?: string;
  zip?: string;
  country?: string;
  phone?: string;
  status?: number;
  totalPrice?: string;
  user?: any | string;
  dateOrdered?: string;
}
