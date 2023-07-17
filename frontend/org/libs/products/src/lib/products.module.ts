import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';
import { ProductItemComponent } from './components/featured-products/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersModule } from '@org/orders';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { UiModule } from '@org/ui';
import { CategoryModule, CategoryService } from '@org/category';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'category/:categoryid',
    component: ProductsListComponent
  },
  {
    path: 'products/:productid',
    component: ProductPageComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    OrdersModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CheckboxModule,
    FormsModule,
    RatingModule,
    InputNumberModule,
    UiModule,
    CategoryModule,
  ],
  //TODO: Change the CategoryBanner position to the Category lib
  declarations: [
    SearchComponent,
    CategoryBannerComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductPageComponent,
    ProductsListComponent,
  ],
  exports: [
    SearchComponent,
    CategoryBannerComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
  ],
  providers: [CategoryService],
})
export class ProductsModule {}
