import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email : '',
    password : '',
  };
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private auth: AuthService, private route: Router, private snack : MatSnackBar) { }

  ngOnInit(): void {
    this.auth.user = null;
  }
  // tslint:disable-next-line: typedef
  loginUser(action){
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        this.auth.user = res;
        localStorage.setItem('email', this.loginUserData.email);
        localStorage.setItem('token', res.token);
      },
      err => {
        console.log(err),
        this.snack.open("Invalid Login",action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
        this.route.navigate(['/login']);
        this.snack.open("Invalid Login",action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
      },
    );
    this.route.navigate(['/home']);
    this.auth.loggedin = true;
    
    this.snack.open("Welcome Back!  Happy Shopping",action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
  }
  // tslint:disable-next-line: typedef
  redirect()
  {
    this.route.navigate(['/register']);
  }

}
