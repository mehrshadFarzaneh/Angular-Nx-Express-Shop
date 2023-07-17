/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { CartFacade } from 'libs/orders/src/lib/state/cart.facade';
import { ProductModel } from '../../../data-access/model/product.model';
import { CartItem } from 'libs/orders/src/lib/state/cart.models';

@Component({
  selector: 'products-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: ProductModel | undefined;

  constructor(private cartService: CartFacade) {}


  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product?.id,
      quantity: 1
    };
    this.cartService.addItem(cartItem);
  }
}
