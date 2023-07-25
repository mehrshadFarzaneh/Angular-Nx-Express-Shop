import { UiModule } from './../../../ui/src/lib/ui.module';
// import { UiModule } from '@org/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { usersRoutes } from './lib.routes';
import { LoginComponent } from './pages/login/login.component';
import { AngularMaterialModule } from 'libs/angular-material/src';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './state/user.reducer';
import { UserEffects } from './state/user.effects';
import { UserFacade } from './state/user.facade';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [LoginComponent],
  providers: [UserFacade],
})
export class UsersModule {}
