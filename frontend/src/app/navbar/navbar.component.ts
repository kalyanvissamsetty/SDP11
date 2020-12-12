import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  nom;
  hidden = false;
  constructor(private r: Router, private auth: AuthService) { }
  ngOnInit(): void {
    this.nom = this.auth.count;
  }
  // tslint:disable-next-line: typedef
  goto()
  {
    this.r.navigate(['/accessories']);
  }
  // tslint:disable-next-line: typedef
  got()
  {
    this.r.navigate(['/laptopaccessories']);
  }
  // tslint:disable-next-line: typedef
  g()
  {
    this.r.navigate(['/menfashion']);
  }
  // tslint:disable-next-line: typedef
  go()
  {
    this.r.navigate(['/womenfashion']);
  }
  // tslint:disable-next-line: typedef
  g1()
  {
    this.r.navigate(['/homeappliances']);
  }
  // tslint:disable-next-line: typedef
  g2()
  {
    this.r.navigate(['/furniture']);
  }
  // tslint:disable-next-line: typedef
  logout()
  {
    this.auth.logout();
  }
  // tslint:disable-next-line: typedef
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  // tslint:disable-next-line: typedef
  gocart()
  {
    this.r.navigate(['/cart']);
  }
}
