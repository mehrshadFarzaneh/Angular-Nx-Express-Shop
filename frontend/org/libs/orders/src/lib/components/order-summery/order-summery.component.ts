import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartFacade } from '../../state/cart.facade';
import { OrderService } from '../../data-access/services/order.service';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'orders-order-summery',
  templateUrl: './order-summery.component.html',
  styleUrls: ['./order-summery.component.scss'],
})
export class OrderSummeryComponent {
  endSubs$: Subject<any> = new Subject();
  totalPrice = 0;
  isCheckout = false;
  constructor(
    private router: Router,
    private cartFacade: CartFacade,
    private ordersService: OrderService
  ) {
    this.router.url.includes('checkout') ? (this.isCheckout = true) : (this.isCheckout = false);
  }

  ngOnInit(): void {
    this._getOrderSummary();
  }

  ngOnDestroy(): void {
    this.endSubs$.next("finish");
    this.endSubs$.complete();
  }

  _getOrderSummary() {
    this.cartFacade.cart$.pipe(takeUntil(this.endSubs$)).subscribe((cart) => {
      this.totalPrice = 0;
      if (cart) {
        cart.items?.map((item) => {
          this.ordersService
            .getProductById(<string>item.productId)
            .pipe()
            .subscribe((product) => {
              this.totalPrice += product.price! * item.quantity;
            });
        });
      }
    });
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
