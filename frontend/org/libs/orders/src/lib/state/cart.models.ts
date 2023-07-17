import { ProductModel } from './../../../../products/src/lib/data-access/model/product.model';
/**
 * Interface for the 'Cart' data
 */
export interface Cart {
  items?: CartItem[];
}

export interface CartItem {
  productId?: string;
  quantity: number;
}

export interface CartItemDetailed {
  product?: ProductModel;
  quantity: number;
}
