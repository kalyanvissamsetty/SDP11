import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    username : '',
    phone : 9999999999,
    password : '',
    email : '',
    orders : 0
  };
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private auth: AuthService, private route: Router, private snack: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.auth.user = null;
  }
  // tslint:disable-next-line: typedef
  registerUser(action)
  {
    let user = {
      email : this.registerUserData.email
    }
    this.auth.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log("Hello");
      },
      err => {
        console.log(err);
      }
    );
    this.auth.registerUser(this.registerUserData)
    .subscribe
   (
     res => {
      console.log(res);
      this.auth.user = res;
      localStorage.setItem('email', this.registerUserData.email);
      localStorage.setItem('token', res.token);
     },
     err => console.log(err)
   );
    this.route.navigate(['/home']);
    this.auth.loggedin = true;
    this.snack.open("Welcoming "+ this.registerUserData.username + " to the world of E-Emporium",action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
  }
  // tslint:disable-next-line: typedef
  redirect()
  {
    this.route.navigate(['/login']);
  }
}
