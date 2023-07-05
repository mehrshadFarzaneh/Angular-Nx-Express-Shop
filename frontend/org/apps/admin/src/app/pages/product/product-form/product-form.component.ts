import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BreakpointObserver } from '@angular/cdk/layout';
//import { ProductModel } from "../../../../../../../libs/product/src/lib/data-access/models/product.model";
import { MatSnackBar } from "@angular/material/snack-bar";
// import { ProductService } from "@org/product";
import { CategoryService } from "@org/category";
import { ProductService } from "@org/products";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductModel } from "../../../../../../../libs/products/src/lib/data-access/model/product.model";
// import { Editor } from "ngx-editor";

@Component({
  selector: 'org-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  editMode = false;
  productId: string | null = null;
  categories: any[] = []; // You can use your own category model here
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: [''],
      images: [''],
      brand: [''],
      price: [0, Validators.required],
      category: ['', Validators.required],
      countInStock: [
        0,
        [Validators.required, Validators.min(0), Validators.max(255)],
      ],
      rating: [0],
      numReviews: [0],
      isFeatured: [false],
      dateCreated: [new Date().toString()],
    });
  }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe(
        (product: any) => {
          if (product) {
            this.editMode = true;
            this.myForm.patchValue({
              name: product.name || '',
              description: product.description || '',
              richDescription: product.richDescription || '',
              image: product.image || '',
              images: product.images || [],
              brand: product.brand || '',
              price: product.price || 0,
              category: product.category || '',
              countInStock: product.countInStock || 0,
              rating: product.rating || 0,
              numReviews: product.numReviews || 0,
              isFeatured: product.isFeatured || false,
              dateCreated: product.dateCreated || '',
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }

    // Get the list of categories from the category service
    // You can use your own logic to fetch the categories
    // Assuming the category service returns an array of categories
    // Assign the array to the categories variable
    // Example:
    // this.categoryService.getCategories().subscribe(
    //   (categories) => {
    //     this.categories = categories;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    // Your code here

    // Get the list of categories from the category service
    this.categoryService.getCategories().subscribe(
      (categories: any) => {
        this.categories = categories;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnDestroy() {
    // this.editor.destroy();
  }

  submitForm() {
    if (this.myForm.invalid) {
      return;
    }
    const product: ProductModel = {
      id: this.productId!,
      name: this.myForm.get('name')!.value,
      description: this.myForm.get('description')!.value,
      richDescription: this.myForm.get('richDescription')!.value,
      image: this.myForm.get('image')!.value,
      images: this.myForm.get('images')!.value,
      brand: this.myForm.get('brand')!.value,
      price: this.myForm.get('price')!.value,
      category: this.myForm.get('category')!.value,
      countInStock: this.myForm.get('countInStock')!.value,
      rating: this.myForm.get('rating')!.value,
      numReviews: this.myForm.get('numReviews')!.value,
      isFeatured: this.myForm.get('isFeatured')!.value,
      dateCreated: this.myForm.get('dateCreated')!.value,
    };
    if (this.editMode) {
      this.productService.editProduct(product).subscribe(
        (response) => {
          this.snackBar.open('Product is updated!', 'Close', {
            duration: 2000,
            panelClass: 'success-snack-bar',
          });
        },
        (error) => {
          this.snackBar.open('Product is not updated!', 'Close', {
            duration: 2000,
            panelClass: 'error-snack-bar',
          });
        }
      );
    } else {
      this.productService.addProduct(product).subscribe(
        (response) => {
          this.snackBar.open('Product is Added!', 'Close', {
            duration: 2000,
            panelClass: 'success-snack-bar',
          });
        },
        (error) => {
          this.snackBar.open('Product Can not create!', 'Close', {
            duration: 2000,
            panelClass: 'error-snack-bar',
          });
        }
      );
    }
    this.router.navigate(['/product']);
  }

  // compareFunction(o1: any, o2: any) {
  //   return (o1.name == o2.name && o1.id == o2.id);
  // }
  getFormValue(columnName: string): any {
    return this.myForm.get(columnName)?.value;
  }
  get touchUi() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }
}
