import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { usersRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersRoutes), RouterModule],
})
export class UsersModule {}
