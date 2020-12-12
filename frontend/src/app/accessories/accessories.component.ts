import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import { DialogAccessoriesComponent } from '../dialog-accessories/dialog-accessories.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  accessories = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  items = [];
  constructor(private auth: AuthService, private router: Router, public dialog: MatDialog, public snack: MatSnackBar) { }

  // tslint:disable-next-line: typedef
  opendialog(i)
  {
     this.dialog.open(DialogAccessoriesComponent, {data: i});
  }
  // tslint:disable-next-line: typedef
  ngOnInit(): void {
    this.getOrders();
    this.auth.getaccessories()
    .subscribe(
      res => {
        this.accessories = res;
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
cart(i, action)
{
      let flag = 0;
      let nn = 0;
    // tslint:disable-next-line: prefer-for-of
    for ( let j = 0; j < this.items.length ; j++)
    {
      if (this.items[j].name === i.name)
      {
        flag = 1;
        nn = j;
      }
    }
    if (flag === 0)
    {
      this.items.push(i);
      this.auth.addtocart(i)
      .subscribe
     (
       res => this.auth.user = res,
       err => console.log(err)
     );
    
    }
    else
    {
      this.snack.open(this.items[nn].name + ' is already in the Cart',action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
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
}


