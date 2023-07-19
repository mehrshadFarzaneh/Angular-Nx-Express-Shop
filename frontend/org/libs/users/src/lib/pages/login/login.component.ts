import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenLocalStorageService,AuthService } from "@org/users";
import { Router } from '@angular/router';

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  // isSubmitted = false;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private tokenLocalStorageService: TokenLocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }
  onSubmit() {
    this.authService.login(
      this.formControllers['usernameOrEmail'].value,
      this.formControllers['password'].value
      )
      .subscribe(res=>{
        if(res.token)
        this.tokenLocalStorageService.setToken(res.token)
        this.router.navigate(['/']);
        console.log(res);
    })
  }
  get formControllers(){
    return this.loginForm.controls;
  }
}
