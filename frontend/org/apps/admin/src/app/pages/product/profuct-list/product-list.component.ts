import { Component, ViewChild } from "@angular/core";
// import {
//   ProductTableElementModel
// } from "../../../../../../../libs/data-access/product/src/lib/models/product-table-element.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from "@angular/material/sort";
import { DialogService } from "../../../../../../../libs/ui/src/lib/services/dialog.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { ProductService } from "../../../../../../../libs/products/src/lib/data-access/services/product.service";
import { ProductModel } from "../../../../../../../libs/products/src/lib/data-access/model/product.model";


@Component({
  selector: 'org-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  PRODUCTS_DATA:ProductModel[] = [
    // some sample data
    {
      "id": "test",
      "name": "iPhone 12",
      "description": "A smartphone with a 6.1-inch display",
      "richDescription": "The iPhone 12 is a smartphone designed and marketed by Apple Inc. It is the 14th generation of the iPhone, and was announced on October 13, 2020. The iPhone 12 features a 6.1-inch OLED display with a resolution of 2532 by 1170 pixels, and supports HDR10 and Dolby Vision. The iPhone 12 also has a dual-camera system on the rear, consisting of a 12-megapixel wide-angle camera and a 12-megapixel ultra-wide-angle camera. The iPhone 12 supports wireless charging and MagSafe accessories, and is compatible with 5G networks.",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._AC_SL1500_.jpg",
      "images": [
        "https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71cQWYVtcBL._AC_SL1500_.jpg"
      ],
      "brand": "Apple",
      "price" : 829,
      "category": {
        "id": "60f9d7e938680aa1d979d7e1",
        "name": "Mobile",
        "color": "#0000FF",
        "icon": "mobile"
      },
      "countInStock": 10,
      "rating": 4.5,
      "numReviews": 100,
      "isFeatured": true,
      "dateCreated": new Date()
    }
    // more products ...
  ];
  displayedColumns: string[] = ['name', 'description', 'image', 'brand', 'price', 'category','dateCreated' ,'rating', 'actions'];
  // @ts-ignore
  dataSource:MatTableDataSource<ProductModel>;

  constructor(private productService:ProductService,
              private dialogService: DialogService,
              private snackBar: MatSnackBar,
              private _liveAnnouncer: LiveAnnouncer) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.productService.getProducts().subscribe((response: ProductModel[])=>{
      this.PRODUCTS_DATA = response;
      this.dataSource = new MatTableDataSource(this.PRODUCTS_DATA);
      this.dataSource.sort = this.sort;
    })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  updateProduct(name: string) {
    return name;
  }

  deleteProduct(id: string) {
    this.dialogService
      .openConfirmDialog({
        title: "Delete product",
        message: "Are you sure you want to delete this product?",
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {

          // delete something here
          this.productService.deleteProduct(id).subscribe(response=>{
            this.snackBar.open('Product is Deleted Successfully!', 'Close', {
              duration: 2000,
              panelClass: 'success-snack-bar'
            });
          },error=>{
            this.snackBar.open('Product Cant deleted Deleted!', 'Close', {
              duration: 2000,
              panelClass: 'success-snack-bar'
            });
          });

        }
      });
  }
}
