import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CartActions from './cart.actions';
import * as CartFeature from './cart.reducer';
import * as CartSelectors from './cart.selectors';
import { CartItem } from './cart.models';

@Injectable()
export class CartFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  cart$ = this.store.pipe(select(CartSelectors.selectCart));
  cartItems$ = this.store.pipe(select(CartSelectors.selectCartItems));
  cartError$ = this.store.pipe(select(CartSelectors.selectCartError));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CartActions.initCart());
  }
  addItem(item:CartItem,directQuntity?: boolean){
    this.store.dispatch(CartActions.addItem({item}));
  }
  updateItem(item:CartItem){
    this.store.dispatch(CartActions.updateItem({item}));
  }
  deleteItem(productId:string){
    this.store.dispatch(CartActions.deleteItem({productId}));
  }
  clearCart(){
    this.store.dispatch(CartActions.emptyCart());
  }
}
