import { FormsModule } from '@angular/forms';
import { DialogLaptopsComponent } from './../dialog-laptops/dialog-laptops.component';
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
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  invalid = false;
  iii = 1;
  quantity: number;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private auth: AuthService, private router: Router, public dialog: MatDialog, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.getOrders();
    this.count();
  }
  // tslint:disable-next-line: typedef
  plus(io,action)
  {
    if ( io.quantity !== 5)
    {
      io.quantity = io.quantity + 1;
      const object = {
        quantity: io.quantity
      };
      this.auth.incrementquantity(io.name, object)
      .subscribe(() => {console.log(''); });
    }
    else{
      this.snack.open('You can add upto 5 Products',action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
    }
    console.log(this.items);
  }
  // tslint:disable-next-line: typedef
  minus(io,action)
  {
    if ( io.quantity !== 1)
    {
      io.quantity = io.quantity - 1;
      const object = {
        quantity: io.quantity
      };
      this.auth.incrementquantity(io.name, object)
      .subscribe(() => {console.log(''); });
    }
    else {
      this.snack.open('You must order one item or remove this item',action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
    }
  }
  // tslint:disable-next-line: typedef
  count()
  {
    this.auth.count = this.items.length;
  }
  // tslint:disable-next-line: typedef
  getOrders()
  {
    this.auth.getorders()
    .subscribe(
      res => {
        console.log(res);
        this.items = res;
        this.Check();
      },
      err =>
      {
        console.log('error');
      }
      );
  }

  // tslint:disable-next-line: typedef
  Check()
  {
    if (this.items.length === 0)
    {
      this.invalid = true;
    }
    else
    {
      this.invalid = false;
    }
    this.count();

  }
  // tslint:disable-next-line: typedef
  checkoutpage()
  {
    this.router.navigate(['/test']);
  }
  // tslint:disable-next-line: typedef
  Remove(pro, action)
  {
    this.auth.deleteorder(pro.name)
    .subscribe(() => {this.getOrders(); this.Check(); });
    this.count();
    this.snack.open(pro.name + " is removed!",action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
  }

  // tslint:disable-next-line: typedef
  CartRemoval(action)
  {
    this.items = [];
    this.auth.deleteAllOrders()
    .subscribe(() => { this.router.navigate(['/home']); });
    this.count();
    this.snack.open(" All Items are removed!",action, {duration: 5000,  horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition});
  }
}
