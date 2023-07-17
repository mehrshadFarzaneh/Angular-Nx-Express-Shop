import { createAction, props } from '@ngrx/store';
import { Cart, CartItem } from './cart.models';

export const initCart = createAction('[Cart] Init Cart');
export const addItem = createAction('[Cart] Add Item', props<{ item: CartItem }>());
export const updateItem = createAction('[Cart] Update Item', props<{ item: CartItem }>());
export const deleteItem = createAction('[Cart] Delete Item', props<{ productId: string }>());
export const emptyCart = createAction('[Cart] Empty Cart');
