
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './data-access/services/category.service';

@NgModule({
  imports: [CommonModule],
  providers: [CategoryService]
})
export class CategoryModule {}
