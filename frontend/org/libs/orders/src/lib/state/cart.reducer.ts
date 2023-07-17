import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CartActions from './cart.actions';
import { Cart, CartItem } from './cart.models';

export const CART_FEATURE_KEY = 'cart';

export interface CartState extends EntityState<Cart> {
  cart: Cart,
  error: string | null;
}

export interface CartPartialState {
  readonly [CART_FEATURE_KEY]: CartState;
}

export const cartAdapter: EntityAdapter<Cart> =
  createEntityAdapter<Cart>();

export const initialCartState: CartState = cartAdapter.getInitialState({
  cart: {
    items: []
    },
    error: null
});

const reducer = createReducer(
  initialCartState,
  on(CartActions.initCart, (state) => {
    const cartJsonString: string | null = localStorage.getItem(CART_FEATURE_KEY);
    if (cartJsonString){
      const cartOnLocalStorage: Cart = JSON.parse(cartJsonString)
      return { ...state, cart: cartOnLocalStorage };
    } else{
      const cartOnLocalStorage: Cart = state.cart;
      localStorage.setItem(CART_FEATURE_KEY,JSON.stringify(cartOnLocalStorage))
      return { ...state, cart: cartOnLocalStorage };
    }
    }),
    on(CartActions.emptyCart, ()=>{
      localStorage.setItem(CART_FEATURE_KEY,JSON.stringify(initialCartState.cart))
      return initialCartState;
    }),
    on(CartActions.addItem, (state, {item})=>{
      // eslint-disable-next-line prefer-const
      let existItem = {...state.cart.items?.find((eachItem) => eachItem.productId == item.productId)};
      // debugger;
      if (existItem.productId){
        existItem.quantity! += item.quantity;
        console.log(state.cart.items)
        const result =
        {
          ...state,
          cart: {
            items: state.cart.items!.map((each:CartItem) =>{
              console.log(each.productId)
              if (each.productId == existItem["productId"]){
                return (existItem as CartItem)
              } else{
                return each
              }
            })
          },
          error: null
        };
        localStorage.setItem(CART_FEATURE_KEY,JSON.stringify(result.cart))
        return result;
      } else{
        const result = {
          ...state,
          cart: {
            items: [...(state.cart.items as CartItem[]), (item as  CartItem)]
          },
          error: null
        }
        localStorage.setItem(CART_FEATURE_KEY,JSON.stringify(result.cart))
        return result;
      }
      console.log("I should not run");
      // if (newItem){
      //   newItem.quantity = newItem.quantity! + item.quantity;
      // } else{
      //   newItem = item;
      // }
      // const UpdatedCartItem:CartItem = [
      //   ...state.cart,
      //   newItem
      // ]
      // localStorage.setItem(CART_FEATURE_KEY,JSON.stringify(UpdatedCartItem))
      // return {...state, cart: UpdatedCartItem};

      // const currentSate: CartState =  JSON.parse(JSON.stringify(state));
      // const cart = currentSate.cart;
      // const cartItemExist = cart.items ?
      //  cart.items.find(i=> item.productId == i.productId ) : false;
      //  if (cartItemExist){
      //   const updatedCartItem = cart.items?.map((i)=>{
      //     if (i.productId == item.productId){
      //       i.quantity = i.quantity + item.quantity;
      //       return i;
      //     }
      //     return i;
      //   })
      //   localStorage.setItem(CART_FEATURE_KEY,JSON.stringify({items:updatedCartItem}))
      //  return {...state,cart:{items:updatedCartItem}};
      //  }else{
      //   // cart.items?.push(item)
      //   if (cart.items){
      //     const newItems = [...cart.items, item];
      //     localStorage.setItem(CART_FEATURE_KEY,JSON.stringify(newItems));
      //     const cartJsonString: string | null = localStorage.getItem(CART_FEATURE_KEY);
      //     if(cartJsonString)
      //     console.log(JSON.parse(cartJsonString).lenght);
      //     return {
      //       ...state,
      //       cart: {
      //         ...state.cart,
      //         items: newItems
      //       }
      //   }
      //   }
      //  }
      // //  debugger;
      //  localStorage.setItem(CART_FEATURE_KEY,JSON.stringify(state.cart))
      // return {...state,cart};
    }),
    on(CartActions.deleteItem, (state,{productId}) => {
        // delete the item from the cart
        const cart = state.cart;
        const newCart = cart.items ? cart.items.filter((item) => item.productId !== productId)
        : false;
        if (newCart) {
          cart.items = newCart;
        }else{
          console.log("Can not Delete The Cart Becurse Cart Item Is Undefine")
        }
        // save the cart to local storage
        const cartJsonString = JSON.stringify(cart);
        localStorage.setItem(CART_FEATURE_KEY, cartJsonString);
        return { ...state, cart }
    }),
    on(CartActions.updateItem, (state,{item}) => {
      // update the item quantity in the cart
      const cart = state.cart;
      cart.items?.map((i) => {
      if (i.productId === item.productId) {
      i.quantity = item.quantity;
      return i;
      }else{
        return i
      }
      });
      // save the cart to local storage
      const cartJson = JSON.stringify(cart);
      localStorage.setItem(CART_FEATURE_KEY, cartJson);
      return { ...state, cart };
    })
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}

export function getCart(){
  return true;
}
