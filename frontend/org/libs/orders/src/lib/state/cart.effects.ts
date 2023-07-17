import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as CartActions from './cart.actions';
import * as CartFeature from './cart.reducer';

@Injectable()
export class CartEffects {
  private actions$ = inject(Actions);

  // init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CartActions.initCart),
  //     switchMap(() => of(CartActions.loadCartSuccess({ cart: [] }))),
  //     catchError((error) => {
  //       console.error('Error', error);
  //       return of(CartActions.loadCartFailure({ error }));
  //     })
  //   )
  // );
}
