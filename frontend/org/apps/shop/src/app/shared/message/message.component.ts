import { MessageService } from 'primeng/api';
import { CartFacade } from './../../../../../../libs/orders/src/lib/state/cart.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'org-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  constructor(private cartFacade: CartFacade, private messageService: MessageService) {}
  ngOnInit(): void {
    this.cartFacade.cart$.subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Cart Updated!'
        });
      }
    );

  }
}
