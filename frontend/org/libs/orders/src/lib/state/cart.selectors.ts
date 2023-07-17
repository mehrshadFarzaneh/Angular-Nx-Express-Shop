import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CART_FEATURE_KEY, CartState, cartAdapter } from './cart.reducer';

// Lookup the 'Cart' feature state managed by NgRx
export const selectCartState =
  createFeatureSelector<CartState>(CART_FEATURE_KEY);

// const { selectAll, selectEntities } = cartAdapter.getSelectors();


export const selectCart = createSelector(selectCartState, (state) => state.cart);
export const selectCartItems = createSelector(selectCart, (cart) => cart.items);
export const selectCartError = createSelector(selectCartState, (state: CartState) => state.error);
// export const selectCartTotal = createSelector(selectCartItems, (items) =>
// items?.reduce((total, item) => total + item.price * item.quantity, 0)
// );

