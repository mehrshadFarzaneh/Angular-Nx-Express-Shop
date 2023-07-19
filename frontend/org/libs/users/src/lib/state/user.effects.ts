import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as UserActions from './user.actions';
import * as UserFeature from './user.reducer';
import { TokenLocalStorageService, UserService} from "@org/users";

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private tokenLocalStorageService$ = inject(TokenLocalStorageService);
  private userService$ = inject(UserService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.initUser),
      switchMap(() => {
        console.log("Im here")
        if (this.tokenLocalStorageService$.isValidToken()){
          const userID = this.tokenLocalStorageService$.getUserIdFromToken();
          if (userID){
            return this.userService$.getUserById(userID).pipe(map((user)=>{
              return UserActions.loadUserSuccess({user})
            }));
          }else{
            return of(UserActions.loadUserFailure({error:"We can't find your token on server."}))
          }
        } else {
          return of(UserActions.loadUserFailure({error:"User dont have a valid token."}))
        }
      }
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(UserActions.loadUserFailure({ error }));
      })
    )
  );
}
