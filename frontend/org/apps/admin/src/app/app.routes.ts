import { Route } from '@angular/router';
import { ShellComponent } from "./shared/components/shell/shell.component";
import { DashbordComponent } from "./pages/dashbord/dashbord.component";
import { CategoryListComponent } from "./pages/category/category-list/category-list.component";
import { CategoryFormComponent } from "./pages/category/category-form/category-form.component";
import { ProductListComponent } from "./pages/product/profuct-list/product-list.component";
import { ProductFormComponent } from "./pages/product/product-form/product-form.component";

export const appRoutes: Route[] = [
  {
    path: "",
    component: ShellComponent,
    children:[{
      path:"dashboard",
      component:DashbordComponent
    },
      {
        path:"category",
        component:CategoryListComponent
      },
      {
        path:"category/edit/:id",
        component:CategoryFormComponent
      },
      {
        path:"category/add",
        component:CategoryFormComponent
      },
      {
        path:"product",
        component:ProductListComponent
      },
      {
        path:"product/add",
        component:ProductFormComponent
      },
    ]
  }
];
