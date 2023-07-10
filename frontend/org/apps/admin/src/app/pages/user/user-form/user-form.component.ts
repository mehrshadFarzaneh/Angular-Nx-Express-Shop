import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {UserService} from "../../../../../../../libs/users/src/lib/data-access/services/user.service";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {UserModel} from "../../../../../../../libs/users/src/lib/data-access/models/user.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'org-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  // @ts-ignore
  userForm: FormGroup;
  editMode = false;
  userId:string | null = null;
constructor(private formBuilder: FormBuilder,
            private activatedRoute:ActivatedRoute,
            private  userService:UserService,
            private snackBar: MatSnackBar,
            private router: Router) {
}
  ngOnInit() {
    this.initialForm();
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(
        (user: any) => {
          if (user) {
            this.editMode = true;
            this.userForm.patchValue({
              name: user.name || '',
              email: user.email || '',
              phone: user.phone || '',
              isAdmin: user.isAdmin || false,
              street: user.street || '',
              apartment: user.apartment || '',
              zip: user.zip || '',
              city: user.city || '',
              country: user.country || ''
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
initialForm(){
  this.userForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', Validators.required],
    isAdmin: [false],
    street: [''],
    apartment: [''],
    zip: [''],
    city: [''],
    country: ['']
  });
}

  submitForm() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const user: UserModel = {
      id: this.userId!,
      name: this.userForm.get("name")!.value,
      email: this.userForm.get("email")!.value,
      phone: this.userForm.get("phone")!.value,
      isAdmin: this.userForm.get("isAdmin")!.value,
      street: this.userForm.get("street")!.value,
      apartment: this.userForm.get("apartment")!.value,
      zip: this.userForm.get("zip")!.value,
      city: this.userForm.get("city")!.value,
      country: this.userForm.get("country")!.value
    };

    if (this.editMode) {
      this.userService.editUser(user).subscribe(
        response => {
          this.snackBar.open('User is updated!', 'Close', {
            duration: 2000,
            panelClass: 'success-snack-bar'
          });
        },
        error => {
          this.snackBar.open('User is not updated!', 'Close', {
            duration: 2000,
            panelClass: 'error-snack-bar'
          });
        }
      );
    } else {
      this.userService.addUser(user).subscribe(
        response => {
          this.snackBar.open('User is added!', 'Close', {
            duration: 2000,
            panelClass: 'success-snack-bar'
          });
        },
        error => {
          this.snackBar.open('User cannot be created!', 'Close', {
            duration: 2000,
            panelClass: 'error-snack-bar'
          });
        }
      );
    }

    this.router.navigate(['/users']);
  }



}
