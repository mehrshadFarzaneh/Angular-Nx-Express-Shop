import { Route } from '@angular/router';
import { ShellComponent } from "./shared/components/shell/shell.component";
import { DashbordComponent } from "./pages/dashbord/dashbord.component";
import { CategoryListComponent } from "./pages/category/category-list/category-list.component";
import { CategoryFormComponent } from "./pages/category/category-form/category-form.component";
import { ProductListComponent } from "./pages/product/profuct-list/product-list.component";
import { ProductFormComponent } from "./pages/product/product-form/product-form.component";
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { OrderDetailComponent } from './pages/order/order-detail/order-detail.component';
import { AuthGuard } from '@org/users';

export const appRoutes: Route[] = [
  {
    path: "",
    component: ShellComponent,
    canActivate: [AuthGuard],
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
      {
        path:"product/edit/:id",
        component:ProductFormComponent
      },
      {
        path:"user",
        component:UserListComponent
      },
      {
        path:"user/add",
        component:UserFormComponent
      },
      {
        path:"user/edit/:id",
        component:UserFormComponent
      },
      {
        path:"product/edit/:id",
        component:ProductFormComponent
      },
      {
        path:"order",
        component:OrderListComponent
      },
      {
        path:"order/edit/:id",
        component:OrderDetailComponent
      },
    ]
  }
];
