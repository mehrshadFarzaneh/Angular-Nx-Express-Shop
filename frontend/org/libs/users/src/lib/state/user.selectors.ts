import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, UserState, userAdapter } from './user.reducer';

// Lookup the 'User' feature state managed by NgRx
export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const getUser = createSelector(selectUserState, (state) => state.user);
export const getUserIsAuthenticate = createSelector(selectUserState, (state) => state.isAuthenticate);
export const getUserError = createSelector(selectUserState, (state) => state.error);


