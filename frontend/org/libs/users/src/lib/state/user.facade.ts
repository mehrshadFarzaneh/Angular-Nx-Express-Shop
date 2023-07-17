import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UserActions from './user.actions';
import * as UserFeature from './user.reducer';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  user$ = this.store.pipe(select(UserSelectors.getUser));
  isAuthenticated$ = this.store.pipe(select(UserSelectors.getUserIsAuthenticate));
  error$ = this.store.pipe(select(UserSelectors.getUserError));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(UserActions.initUser());
  }
}
