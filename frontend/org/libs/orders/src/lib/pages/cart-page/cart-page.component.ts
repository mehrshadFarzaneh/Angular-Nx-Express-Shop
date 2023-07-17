import { Component } from '@angular/core';
import { CartFacade } from '../../state/cart.facade';
import { Router } from '@angular/router';
import { OrderService } from '../../data-access/services/order.service';
import { Subject, takeUntil } from 'rxjs';
import { CartItemDetailed } from '../../state/cart.models';

@Component({
  selector: 'orders-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;
  endSubs$: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private cartFacade: CartFacade,
    private productService: OrderService
  ) {}

  ngOnInit(): void {
    this._getCartDetails();
  }
  ngOnDestroy() {
    this.endSubs$.next("finish");
    this.endSubs$.complete();
  }


  private _getCartDetails() {
    this.cartFacade.cart$.pipe(takeUntil(this.endSubs$)).subscribe((resCart) => {
      this.cartItemsDetailed = [];
      this.cartCount = resCart?.items?.length ?? 0;
      resCart.items?.forEach((cartItem) => {
        this.productService.getProductById(<string>cartItem.productId).subscribe((resProduct) => {
          this.cartItemsDetailed.push({
            product: resProduct,
            quantity: cartItem.quantity
          });
        });
      });
    });
  }

  backToShop() {
    this.router.navigate(['/products']);
  }

  deleteCartItem(cartItem: CartItemDetailed) {
    this.cartFacade.deleteItem(cartItem.product!.id!);
  }

  updateCartItemQuantity(event: any, cartItem: CartItemDetailed) {
    this.cartFacade.addItem(
      {
        productId: cartItem.product!.id,
        quantity: event.value
      },
      true
    );
  }
}
