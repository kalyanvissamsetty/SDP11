import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeui',
  templateUrl: './homeui.component.html',
  styleUrls: ['./homeui.component.css']
})
export class HomeuiComponent implements OnInit {

  constructor(private router: Router) { }

  // tslint:disable-next-line: typedef
  mobiles()
  {
    this.router.navigate(['/mobiles']);
  }
  // tslint:disable-next-line: typedef
  laptops()
  {
    this.router.navigate(['/laptops']);
  }
  // tslint:disable-next-line: typedef
  sports()
  {
    this.router.navigate(['/sportsitems']);
  }
   // tslint:disable-next-line: typedef
   men()
   {
     this.router.navigate(['/menfashion']);
   }
   // tslint:disable-next-line: typedef
   women()
   {
     this.router.navigate(['/womenfashion']);
   }
   // tslint:disable-next-line: typedef
   kids()
   {
     this.router.navigate(['/kids']);
   }
   // tslint:disable-next-line: typedef
  tv()
  {
    this.router.navigate(['/telivisions']);
  }
  // tslint:disable-next-line: typedef
  elec()
  {
    this.router.navigate(['/electronics']);
  }
  // tslint:disable-next-line: typedef
  homeapp()
  {
    this.router.navigate(['/homeappliances']);
  }
    // tslint:disable-next-line: typedef
    acess()
    {
      this.router.navigate(['/accessories']);
    }
    // tslint:disable-next-line: typedef
    laptopaccess()
    {
      this.router.navigate(['/laptopaccessories']);
    }
    // tslint:disable-next-line: typedef
    furn()
    {
      this.router.navigate(['/furniture']);
    }
  ngOnInit(): void {
  }

}
