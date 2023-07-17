import { CartItem } from 'libs/orders/src/lib/state/cart.models';
import { CartFacade } from './../../../../../orders/src/lib/state/cart.facade';
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../data-access/model/product.model';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../data-access/services/product.service';

@Component({
  selector: 'products-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent {
  featuredProducts: ProductModel[] = [];
  endSubs$: Subject<any> = new Subject();

  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    this._getFeaturedProducts();
  }

  ngOnDestroy(): void {
    this.endSubs$.next("Finish Subscribtion");
    this.endSubs$.complete();
  }

  private _getFeaturedProducts() {
    this.prodService
      .getFeaturedProducts(4)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((products) => {
        this.featuredProducts = products;
      });
  }
}
