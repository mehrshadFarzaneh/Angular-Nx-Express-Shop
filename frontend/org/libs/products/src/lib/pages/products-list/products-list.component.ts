import { Component } from '@angular/core';
import { CategoryModel, CategoryService } from '@org/category';
import { ProductService } from '../../data-access/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../data-access/model/product.model';

@Component({
  selector: 'org-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products: ProductModel[] = [];
  categories: CategoryModel[] = [];
  isCategoryPage!: boolean;

  constructor(
    private prodService: ProductService,
    private catService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['categoryid'] ? this._getProducts([params['categoryid']]) : this._getProducts();
      params['categoryid'] ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
    });
    this._getCategories();
  }

  private _getProducts(categoriesFilter?: string[]) {
    this.prodService.getProducts(categoriesFilter).subscribe((resProducts) => {
      this.products = resProducts;
    });
  }

  private _getCategories() {
    this.catService.getCategories().subscribe((resCats) => {
      this.categories = resCats;
    });
  }

  categoryFilter() {
    const selectedCategories = this.categories
        .filter((category) => category.checked)
        .map((category) => category.id)
        .filter((id) => typeof id === "string") as string[];

      this._getProducts(selectedCategories);

  }
}
