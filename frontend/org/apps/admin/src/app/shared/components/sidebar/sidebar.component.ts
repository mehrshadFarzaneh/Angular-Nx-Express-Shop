import { AuthService } from './../../../../../../../libs/users/src/lib/data-access/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'org-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  /**
   *
   */
  constructor(private authService:AuthService) {
  }
logout() {
  this.authService.logout();
}
}
