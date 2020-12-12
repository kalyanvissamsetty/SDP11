import { DialogSportsComponent } from './../dialog-sports/dialog-sports.component';
import { Component, OnInit } from '@angular/core';
import { TopsComponent } from './../tops/tops.component';
import { HandbagComponent } from './../handbag/handbag.component';
import { BottomwearComponent } from './../bottomwear/bottomwear.component';
import { FootwearComponent } from './../footwear/footwear.component';
import { SunglassesComponent } from './../sunglasses/sunglasses.component';
import { WatchesComponent } from './../watches/watches.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
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
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportitems = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  items = [];
  constructor(private auth: AuthService, private router: Router, public dialog: MatDialog, private snack : MatSnackBar) { }
  // tslint:disable-next-line: typedef
  opendialog(i)
  {
     this.dialog.open(DialogSportsComponent, {data: i});
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
   // tslint:disable-next-line: typedef
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
  ngOnInit(): void {
    this.getOrders();
    this.auth.getsport()
    .subscribe(
      res => {
        this.sportitems = res;
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
