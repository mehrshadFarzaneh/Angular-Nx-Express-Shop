import { Component } from '@angular/core';
import { CartFacade } from '../../state/cart.facade';

@Component({
  selector: 'orders-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
})
export class CartIconComponent {
  cartCount = 0;
  constructor(private cartService: CartFacade) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart) => {
      this.cartCount = cart?.items?.length ?? 0;
    });
  }
}
