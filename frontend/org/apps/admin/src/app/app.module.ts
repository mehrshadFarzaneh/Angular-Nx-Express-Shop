import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ShellComponent } from './shared/components/shell/shell.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AngularMaterialModule } from '../../../../libs/angular-material/src';
import { MatSortModule } from '@angular/material/sort';
import { environment } from '../environments/environment';
import { APP_CONFIG } from '@org/app-config';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { CategoryFormComponent } from './pages/category/category-form/category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_COLOR_FORMATS,
  NGX_MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
} from '@angular-material-components/color-picker';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ColorSketchModule } from 'ngx-color/sketch';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
// import { ConfirmDialogComponent } from '../../../../libs/ui/src/lib/confirm-dialog/confirm-dialog.component';
import { ProductListComponent } from './pages/product/profuct-list/product-list.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { QuillModule } from 'ngx-quill';
// import {CKEditorModule} from "ckeditor4-angular";
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { OrderDetailComponent } from './pages/order/order-detail/order-detail.component';
import { JwtInterceptor, UsersModule } from '@org/users';
import { CategoryModule, CategoryService } from '@org/category';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiModule } from '@org/ui';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashbordComponent,
    ShellComponent,
    SidebarComponent,
    ShellComponent,
    CategoryListComponent,
    CategoryFormComponent,
    ProductListComponent,
    ProductFormComponent,
    UserListComponent,
    UserFormComponent,
    OrderListComponent,
    OrderDetailComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AngularMaterialModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    MatSortModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatColorPickerModule,
    ColorPickerModule,
    ColorSketchModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    RichTextEditorModule,
    BrowserAnimationsModule,
    // EditorModule,
    ButtonModule,
    UiModule,
    // QuillModule.forRoot()
    UsersModule
  ],
  providers: [
    CategoryService,
    { provide: APP_CONFIG, useValue: environment },
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
