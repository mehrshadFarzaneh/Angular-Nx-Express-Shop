import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {OrderService} from "../../../../../../../libs/orders/src/lib/data-access/services/order.service";
import {OrderModel} from "../../../../../../../libs/orders/src/lib/data-access/models/order.model";
import {Sort} from "@angular/material/sort";
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'org-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  displayedColumns: string[] = ['userName', 'totalPrice', 'dateCreated', 'status', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource<OrderModel>;

  constructor(private orderService: OrderService,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders: OrderModel[]) => {
      this.dataSource = new MatTableDataSource(orders);
    });
  }
  deleteOrder(id: any) {
    return id;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
