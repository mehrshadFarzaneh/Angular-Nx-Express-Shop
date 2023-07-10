import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {UserModel} from "../../../../../../../libs/users/src/lib/data-access/models/user.model";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {UserService} from "../../../../../../../libs/users/src/lib/data-access/services/user.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'org-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'email', 'isAdmin', 'country', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource<UserModel>;

  constructor(private userService: UserService,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: UserModel[]) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  editUser(userId: string): void {
    // Handle edit user action
    console.log('Edit user:', userId);
  }

  deleteUser(userId: string): void {
    // Handle delete user action
    console.log('Delete user:', userId);
  }
}
