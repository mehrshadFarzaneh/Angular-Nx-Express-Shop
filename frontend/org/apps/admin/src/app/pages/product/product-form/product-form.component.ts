import { Component, OnDestroy, OnInit,Inject } from "@angular/core";
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
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { CategoryModel } from "libs/category/src/lib/data-access/models/category.model";
import { APP_CONFIG } from "@org/app-config";
// import { Editor } from "ngx-editor";

@Component({
  selector: 'org-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  myForm!: FormGroup;
  editMode = false;
  productId: string | null = null;
  categories: any[] = []; // You can use your own category model here
  searchControl = new FormControl();
  filteredCategories!: any[];
  flaging = false;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  BaseFileCenterUrl = this.appConfig.baseUrl;

  // categories$: Observable<CategoryModel[]>;
  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    public categoryService: CategoryService,
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar,
    private router: Router,
    public sanitizer: DomSanitizer,
  ) {}

  initialForm(){
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
    this.initialForm()
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response;
      this.flaging = true;
    })
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
          this.imageUrl = product.image;
        },
        (error) => {
          console.log(error);
        }
      );

    }


    this.searchControl.valueChanges.subscribe((value: string) => {
      this.categoriesFilter(value);
    });

    // Your code here

    // Get the list of categories from the category service
    this.categoryService.getCategories().subscribe(
      (categories: any) => {
        this.categories = categories;
        this.filteredCategories = this.categories.slice();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // ngOnDestroy() {
  //   // this.editor.destroy();
  // }

  submitForm() {
    // console.log(this.myForm.get('name')?.hasError('required'));
    // Get all Form Controls keys and loop them
    Object.keys(this.myForm.controls).forEach(key => {
      // Get errors of every form control
      console.log(this.myForm.get(key)?.errors);
    });
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
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
      category: this.myForm.get('category')!.value.id,
      countInStock: this.myForm.get('countInStock')!.value,
      rating: this.myForm.get('rating')!.value,
      numReviews: this.myForm.get('numReviews')!.value,
      isFeatured: this.myForm.get('isFeatured')!.value,
      dateCreated: this.myForm.get('dateCreated')!.value,
    };
    const formData = new FormData();
    // You can also use a “for” loop to iterate over the form keys
    for (const key in product) {
      // eslint-disable-next-line no-prototype-builtins
      if (product.hasOwnProperty(key)) {
        console.log(key + ": " + (product as any)[key])
        formData.append(key, (product as any)[key]);
      }

    }

    if (this.editMode) {
      this.productService.editProduct(product,formData).subscribe(
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
      this.productService.addProduct(formData).subscribe(
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


  filter(event: any) {
    const value = event.value;
    this.categoriesFilter(value);
  }
  categoriesFilter(value: null | object | any | string) {
    if (value) {
      this.filteredCategories = this.categories.filter((category: any) => {
        if (typeof category.name === 'string') {
          return category.name.toLowerCase().includes(value.toLowerCase());
        }
        return false;
      });
    } else {
      this.filteredCategories = this.categories;
    }
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

  imageUrl: string | undefined;
  selectedImageName = "Noting selected.";
  onFileChangeSelectedImage(event:any){
    const file = event.target.files[0];
    if (file) {
      this.selectedImageName = file.name;
      this.myForm.patchValue({image: file});
      this.myForm.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
