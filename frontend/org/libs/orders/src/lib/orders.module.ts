import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ordersRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ordersRoutes), RouterModule],
})
export class OrdersModule {}
