import { DialogMobilesComponent } from './../dialog-mobiles/dialog-mobiles.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles = [];
  itemss = [];
  cartitems;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private auth: AuthService, private router: Router, public dialog: MatDialog, private snack : MatSnackBar) { }
  // tslint:disable-next-line: typedef
cart(i, action)
{
 let flag = 0;
 let j = 0;
 let nn = 0;
 // tslint:disable-next-line: prefer-for-of
 for (j = 0; j < this.itemss.length ; j++)
 {
   console.log(this.itemss[j].name);
   if (this.itemss[j].name === i.name)
   {
     flag = 1;
     nn = j;
   }
 }
 if (flag === 0)
 {
  this.itemss.push(i);
  this.auth.addtocart(i)
  .subscribe
 (
   res => this.auth.user = res,
   err => console.log(err)
 );
 }
 else
 {
  j = 0;
  flag = 0;
  console.log(this.itemss[nn].name);
  this.snack.open(this.itemss[nn].name + ' is already in the Cart',action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
 }
}

  // tslint:disable-next-line: typedef
    opendialog(i)
    {
       this.dialog.open(DialogMobilesComponent, {data: i});
    }
  ngOnInit(): void {
    this.auth.getorders()
    .subscribe(
      res => {
        this.itemss = res;
      },
      err => {
        console.log(err);
      }
    );
    this.auth.getProducts()
    .subscribe(
      res => {
        this.mobiles = res;
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

