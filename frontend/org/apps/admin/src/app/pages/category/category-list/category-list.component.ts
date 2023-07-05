import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from "@angular/material/sort";
import { CategoryModel } from "../../../../../../../libs/category/src/lib/data-access/models/category.model";
import { DialogService } from "../../../../../../../libs/ui/src/lib/services/dialog.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { CategoryService } from "../../../../../../../libs/category/src/lib/data-access/services/category.service";


@Component({
  selector: 'org-profuct-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  CATEGORIES_DATA:CategoryModel[] = [
    {
      "id": "test",
      "name": "Mobile",
      "color": "Mobile",
      "icon": "Mobile"
    },
    // {
    //   "name": "Beauty",
    //   "color": "Beauty",
    //   "icon": "Beauty"
    // },
    // {
    //   "name": "Computers",
    //   "color": "Computers",
    //   "icon": "Computers"
    // },
    // {
    //   "name": "House",
    //   "color": "House",
    //   "icon": "House"
    // },
    // {
    //   "name": "Games",
    //   "color": "Games",
    //   "icon": "Games"
    // },
    // {
    //   "name": "Cameras",
    //   "color": "Cameras",
    //   "icon": "Cameras"
    // },
    // {
    //   "name": "Books",
    //   "color": "Books",
    //   "icon": "Books"
    // }
  ];
  displayedColumns: string[] = ['name', 'icon', 'color', 'actions'];
  // @ts-ignore
  dataSource:MatTableDataSource<CategoryModel>;

  constructor(private categoryService:CategoryService,
              private dialogService: DialogService,
              private snackBar: MatSnackBar,
              private _liveAnnouncer: LiveAnnouncer) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.categoryService.getCategories().subscribe((response: CategoryModel[])=>{
      this.CATEGORIES_DATA = response
      //   .map(cat => {
      //   return {
      //     name: cat.name,
      //     color: cat.name,
      //     icon: cat.name
      //   }
      // });
      this.dataSource  = new MatTableDataSource(this.CATEGORIES_DATA);
      this.dataSource.sort = this.sort;
      console.log(this.CATEGORIES_DATA)
    })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  updateCategory(name: string) {
    return name;
  }

  deleteCategory(id: string) {
    this.dialogService
      .openConfirmDialog({
        title: "Delete category",
        message: "Are you sure you want to delete this category?",
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {

          // delete something here
          this.categoryService.deleteCategory(id).subscribe(response=>{
            this.snackBar.open('Category is Deleted Successfully!', 'Close', {
              duration: 2000,
              panelClass: 'success-snack-bar'
            });
          },error=>{
            this.snackBar.open('Category Cant deleted Deleted!', 'Close', {
              duration: 2000,
              panelClass: 'success-snack-bar'
            });
          });

        }
      });
  }
}
