import { TopsComponent } from './../tops/tops.component';
import { HandbagComponent } from './../handbag/handbag.component';
import { BottomwearComponent } from './../bottomwear/bottomwear.component';
import { FootwearComponent } from './../footwear/footwear.component';
import { SunglassesComponent } from './../sunglasses/sunglasses.component';
import { WatchesComponent } from './../watches/watches.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-womenfashion',
  templateUrl: './womenfashion.component.html',
  styleUrls: ['./womenfashion.component.css']
})
export class WomenfashionComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  watches1 = [];
  tops1 = [];
  sunglasses1 = [];
  handbags1 = [];
  footwear1 = [];
  bottomwear1 = [];
  items =[];
  constructor(private auth: AuthService, private router: Router, public dialog: MatDialog, private snack: MatSnackBar) { }

  // tslint:disable-next-line: typedef
  watch_open(i)
  {
     this.dialog.open(WatchesComponent, {data: i});
  }
  // tslint:disable-next-line: typedef
  sunglasses_open(i)
  {
     this.dialog.open(SunglassesComponent, {data: i});
  }
  // tslint:disable-next-line: typedef
  footwear_open(i)
  {
     this.dialog.open(FootwearComponent, {data: i});
  }
  // tslint:disable-next-line: typedef
  bottom_wear(i)
  {
    this.dialog.open(BottomwearComponent, {data: i});
  }
  // tslint:disable-next-line: typedef
  handbag_wear(i)
  {
    this.dialog.open(HandbagComponent, {data: i});
  }
  // tslint:disable-next-line: typedef
  tops_wear(i)
  {
    this.dialog.open(TopsComponent, {data: i});
  }
  cart(i,action)
 {
  let flag = 0;
  let nn = 0;
  // tslint:disable-next-line: prefer-for-of
  for (let j = 0; j < this.items.length ; j++)
  {
    if (this.items[j].name === i.name)
    {
      flag = 1;
      nn = j;
    }
  }
  if (flag === 1)
  {
    this.snack.open(this.items[nn].name + ' is already in the Cart',action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
  }
  else
  {
    this.items.push(i);
    this.auth.addtocart(i)
    .subscribe
   (
     res => this.auth.user = res,
     err => console.log(err)
   );
  }
 }
  // tslint:disable-next-line: typedef
  getOrders()
  {
    this.auth.getorders()
    .subscribe(
      res => {
        this.items = res;
      },
      err =>
      {
        console.log('error');
      }
    );
  }
ngOnInit(): void {
  this.getOrders();
  this.auth.getwatches()
  .subscribe(
    res => {
      this.watches1 = res;
    },
    err => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          this.router.navigate(['/login']);
        }
      }
    }
  );
  this.getOrders();
  this.auth.getsunglasses()
  .subscribe(
    res => {
      this.sunglasses1 = res;
    },
    err => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          this.router.navigate(['/login']);
        }
      }
    }
  );
  this.getOrders();
  this.auth.getfootwear()
  .subscribe(
    res => {
      this.footwear1 = res;
    },
    err => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          this.router.navigate(['/login']);
        }
      }
    }
  );
  this.getOrders();
  this.auth.getbottomwear()
  .subscribe(
    res => {
      this.bottomwear1 = res;
    },
    err => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          this.router.navigate(['/login']);
        }
      }
    }
  );
  this.getOrders();
  this.auth.gethandbags()
  .subscribe(
    res => {
      this.handbags1 = res;
    },
    err => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          this.router.navigate(['/login']);
        }
      }
    }
  );
  this.getOrders();
  this.auth.gettop()
  .subscribe(
    res => {
      this.tops1 = res;
    },
    err => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          this.router.navigate(['/login']);
        }
      }
    }
  );
}
}

