import { createAction, props } from '@ngrx/store';
import { UserEntity } from './user.models';
import { UserModel } from '../data-access/models/user.model';

export const initUser = createAction('[User Page] Init');

export const loadUserSuccess = createAction(
  '[User/API] Load User Success',
  props<{ user: UserModel }>()
);

export const loadUserFailure = createAction(
  '[User/API] Load User Failure',
  props<{ error: any }>()
);
