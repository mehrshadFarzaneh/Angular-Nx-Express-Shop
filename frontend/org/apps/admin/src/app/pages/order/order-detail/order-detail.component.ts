import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '@org/category';
import { OrderModel } from 'libs/orders/src/lib/data-access/models/order.model';
import { ORDER_STATUS } from '../order-status';
import { OrderService } from 'libs/orders/src/lib/data-access/services/order.service';

@Component({
  selector: 'org-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent {
getCurentValue(): any {
   const a = this.orderStatusList[this.order.status || 0].label;
   return a;
}
  selected = 1;
  order!:OrderModel;
  orderId: string | null = null;
  orderStatusList:any[] = Object.values(ORDER_STATUS);
  /**
   *
   */
  constructor(private formBuilder:FormBuilder,
              private activatedRoute: ActivatedRoute,
              private  orderService: OrderService,
              private breakpointObserver: BreakpointObserver,
              private snackBar: MatSnackBar,
              private router: Router) {  }
ngOnInit(): void {
  this.orderId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.orderId) {
      this.orderService.getOrdersById(this.orderId).subscribe(
        (order: any) => {
          this.order = order;
        },
        (error) => {
          console.log(error);
        }
      );
    }
}
changeSelection(value:any){
  const edited_model = {...this.order,status:value.value};
  this.orderService.editOrders(edited_model).subscribe(response=>{
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
}

}
