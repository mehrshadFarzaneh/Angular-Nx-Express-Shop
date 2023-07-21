import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
// import { ordersRoutes } from './lib.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCart from './state/cart.reducer';
import { CartEffects } from './state/cart.effects';
import { CartFacade } from './state/cart.facade';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
//TODO
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { OrderSummeryComponent } from './components/order-summery/order-summery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { UserFacade } from '@org/users';

export const ordersRoutes: Route[] = [
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'checkout',
    component: CheckOutComponent,
  },
  {
    path: 'success',
    component: ThanksComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    RouterModule.forChild(ordersRoutes),
    RouterModule,
    StoreModule.forFeature(fromCart.CART_FEATURE_KEY, fromCart.cartReducer),
    EffectsModule.forFeature([CartEffects]),
    // TODO
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    InputNumberModule,
    BadgeModule,
    ButtonModule,
  ],
  providers: [CartFacade],
  declarations: [
    CartIconComponent,
    CartPageComponent,
    CheckOutComponent,
    ThanksComponent,
    OrderSummeryComponent,
  ],
  exports: [CartIconComponent,CartPageComponent,
    OrderSummeryComponent,CheckOutComponent,ThanksComponent],
})
export class OrdersModule {
  /**
   *
   */
  constructor(private cartFacade: CartFacade) {
    cartFacade.init();
  }
}
