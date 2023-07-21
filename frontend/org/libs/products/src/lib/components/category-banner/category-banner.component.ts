/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService,CategoryModel } from '@org/category';
import { takeUntil,Subject } from 'rxjs';

@Component({
  selector: 'products-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.scss'],
})
export class CategoryBannerComponent implements OnInit, OnDestroy {
  categories: CategoryModel[] = [];
  endSubs$: Subject<any> = new Subject();
  constructor(private categoriesService: CategoryService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.endSubs$))
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  ngOnDestroy() {
    this.endSubs$.next("end subscription");
    this.endSubs$.complete();
  }
}
