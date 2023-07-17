import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UserActions from './user.actions';
import { UserEntity } from './user.models';
import { UserModel } from '../data-access/models/user.model';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  user: UserModel | null; // which User record has been selected
  isAuthenticate: boolean,
  error?: string
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}

export const userAdapter: EntityAdapter<UserEntity> =
  createEntityAdapter<UserEntity>();

export const initialUserState: UserState = userAdapter.getInitialState({
  // set initial required properties
  user: null,
  isAuthenticate: false,
});

const reducer = createReducer(
  initialUserState,
  on(UserActions.initUser, (state) => ({
    ...state
  })),
  on(UserActions.loadUserSuccess, (state, { user }) =>
  ({
    ...state,
    user,
    isAuthenticate: true
  })
  ),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, user: null, isAuthenticate: false, error }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
