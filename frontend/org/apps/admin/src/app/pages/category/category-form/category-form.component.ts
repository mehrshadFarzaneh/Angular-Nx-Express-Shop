import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BreakpointObserver } from '@angular/cdk/layout';
import { CategoryModel } from "../../../../../../../libs/category/src/lib/data-access/models/category.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CategoryService } from "@org/category";

@Component({
  selector: 'org-product-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent {
  myForm: FormGroup;
  editMode = false;
  selectedIcon = new FormControl(null);
  icons: string[] = []
  categoryId:string | null = null;
  constructor(private formBuilder:FormBuilder,
              private activatedRoute: ActivatedRoute,
              private  categoryService: CategoryService,
              private breakpointObserver: BreakpointObserver,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      selectedIcon: [''],
      selectedColor: ['#000000']
    })
  }

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.categoryId) {
      this.categoryService.getCategoryById(this.categoryId).subscribe(
        (category: any) => {
          if (category) {
            const selectedIcon = this.icons.find(icon => icon === category.icon);
            this.editMode = true;
            this.myForm.patchValue({
              name: category.name || '',
              selectedIcon: selectedIcon || '',
              selectedColor: category.color || '#000000'
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }


    // Watch for changes to the selectedIcon field in the form
    // @ts-ignore
    // this.myForm.get('selectedIcon').valueChanges.subscribe((icon: string) => {
    //   this.selectedIcon = icon;
    // });
  }

  submitForm() {
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    const category: CategoryModel = {
      id: this.categoryId!,
      name: this.myForm.get("name")!.value,
      icon: this.myForm.get("selectedIcon")!.value,
      color: this.myForm.get("selectedColor")!.value
    };
    if (this.editMode){
      this.categoryService.editCategory(category).subscribe(response=>{
        this.snackBar.open('Category is updated!', 'Close', {
          duration: 2000,
          panelClass: 'success-snack-bar'
        });
      },error=>{
        this.snackBar.open('Category is not updated!', 'Close', {
          duration: 2000,
          panelClass: 'error-snack-bar'
        });
      });
    }else{
      this.categoryService.addCategory(category).subscribe(response=>{
        this.snackBar.open('Category is Added!', 'Close', {
          duration: 2000,
          panelClass: 'success-snack-bar'
        });
      },error=>{
        this.snackBar.open('Category Can not create!', 'Close', {
          duration: 2000,
          panelClass: 'error-snack-bar'
        });
      });
    }
    this.router.navigate(['/category']);
  }

  // compareFunction(o1: any, o2: any) {
  //   return (o1.name == o2.name && o1.id == o2.id);
  // }
  get touchUi() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }

}
