import { Route } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: HomePageComponent
  }
];
