import { emptyCart } from './../../state/cart.actions';
import { UserService } from "@org/users";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderItem } from '../../data-access/models/order-item.model';
import { Router } from '@angular/router';
import { CartFacade } from '../../state/cart.facade';
import { OrderService } from '../../data-access/services/order.service';
import { takeUntil,Subject } from 'rxjs';
import { Cart, CartItem, } from '../../state/cart.models';
import { OrderModel } from '../../data-access/models/order.model';
import { StripeService } from 'ngx-stripe'

@Component({
  selector: 'orders-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {
  checkoutFormGroup: FormGroup | undefined;
  isSubmitted = false;
  orderItems: OrderItem[] = [];
  userId: string | undefined;
  countries = [];
  unsubscribe$: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private usersService: UserService,
    private formBuilder: FormBuilder,
    private cartFacade: CartFacade,
    private ordersService: OrderService
  ) {}

  ngOnInit(): void {
    this._initCheckoutForm();
    this._autoFillUserData();
    this._getCartItems();
    this._getCountries();
  }

  ngOnDestroy() {
    this.unsubscribe$.next("finish");
    this.unsubscribe$.complete();
  }

  private _initCheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      apartment: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  private _autoFillUserData() {
    this.usersService
      .observeCurrentUser()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        console.log(user);
        if (user) {
          this.userId = user.id;
          this.checkoutForm['name'].setValue(user.name);
          this.checkoutForm['email'].setValue(user.email);
          this.checkoutForm['phone'].setValue(user.phone);
          this.checkoutForm['city'].setValue(user.city);
          this.checkoutForm['street'].setValue(user.street);
          this.checkoutForm['country'].setValue(user.country);
          this.checkoutForm['zip'].setValue(user.zip);
          this.checkoutForm['apartment'].setValue(user.apartment);
        }
      });
  }

  private _getCartItems() {
    const cart = this.cartFacade.cart$.pipe().subscribe(cart=>{
      this.orderItems = cart.items!.map((item)=>{
        return <CartItem>{
          product: item.productId,
          quantity: item.quantity
        };
      })
    });
  }

  private _getCountries() {
    // TODO
    // this.countries = this.usersService.getCountries();
  }

  backToCart() {
    this.router.navigate(['/cart']);
  }

  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup!.invalid) {
      return;
    }



    this.ordersService.createCheckoutSession(this.orderItems).subscribe(errorMessage=>{
      if (errorMessage){
        console.log("Error in redirection to the page.")
      }
    }
    )



    // const order: OrderModel = {
    //   orderItems: this.orderItems,
    //   shippingAddress1: this.checkoutForm['street'].value,
    //   shippingAddress2: this.checkoutForm['apartment'].value,
    //   city: this.checkoutForm['city'].value,
    //   zip: this.checkoutForm['zip'].value,
    //   country: this.checkoutForm['country'].value,
    //   phone: this.checkoutForm['phone'].value,
    //   status: 0,
    //   user: this.userId,
    //   dateOrdered: `${Date.now()}`
    // };

    // this.ordersService.addOrder(order).subscribe(
    //   () => {
    //     //redirect to thank you page // payment
    //     this.cartFacade.clearCart();
    //     this.router.navigate(['/success']);
    //   },
    //   () => {
    //     //display some message to user
    //   }
    // );
  }

  get checkoutForm() {
    return this.checkoutFormGroup!.controls;
  }
}
