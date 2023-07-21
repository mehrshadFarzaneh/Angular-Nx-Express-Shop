import { CategoryModule, CategoryService } from '@org/category';
import { OrdersModule } from './../../../../libs/orders/src/lib/orders.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@org/ui';
import { MessageComponent } from './shared/message/message.component';
// TODO: Clean PrimeNG with creating new lib fo that
import { ToastModule } from 'primeng/toast';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { ProductsModule } from '@org/products';
import { NavComponent } from './shared/nav/nav.component';
import { environment } from 'apps/admin/src/environments/environment';
import { APP_CONFIG } from '@org/app-config';
import { JwtInterceptor, UsersModule } from '@org/users';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    UiModule,
    ToastModule,
    OrdersModule,
    UsersModule,
    ProductsModule,
    CategoryModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: false, // Pauses recording actions and state changes when the extension window is not open
    }),
    NgxStripeModule.forRoot('pk_test_51NVleZGKkyz6opfAlMWYgdPbwABBwEF7GwweAbJxdM61k2yH3nZkeCtzhuvbRMLLaRDetSP9zGoPfRJWDiQEgrMg00w1FiJKhZ')
  ],
  providers: [
    MessageService,
    CategoryService,
    // TODO: Make Evnirment for Shop Sepratly
    { provide: APP_CONFIG, useValue: environment },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
