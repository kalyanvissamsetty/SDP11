import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  log: boolean;
  constructor( private router: Router, private auth: AuthService) {
    this.log = this.auth.loggedin;
  }
  // tslint:disable-next-line: typedef
  logout()
  {
    console.log(this.auth.loggedin);
    this.auth.loggedin = !this.auth.loggedin;
  }
  // tslint:disable-next-line: typedef
  loggedin()
  {
    console.log(this.auth.loggedin);
    this.auth.loggedin = !this.auth.loggedin;
  }
}
