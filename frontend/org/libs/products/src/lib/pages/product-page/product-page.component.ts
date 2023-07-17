import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartFacade, CartItem } from '@org/orders';
import { ProductService } from '../../data-access/services/product.service';
import { ProductModel } from '../../data-access/model/product.model';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'org-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  product!: ProductModel;
  endSubs$: Subject<any> = new Subject();
  quantity = 1;

  constructor(
    private prodService: ProductService,
    private route: ActivatedRoute,
    private cartFacade: CartFacade
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['productid']) {
        this._getProduct(params['productid']);
      }
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next("finish");
    this.endSubs$.complete();
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity
    };

    this.cartFacade.addItem(cartItem);
  }

  private _getProduct(id: string) {
    this.prodService
      .getProductById(id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((resProduct) => {
        this.product = resProduct;
      });
  }
}
