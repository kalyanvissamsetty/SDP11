import { DialogSpeakersComponent } from './../dialog-speakers/dialog-speakers.component';
import { DialogHeadphonesComponent } from './../dialog-headphones/dialog-headphones.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
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
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private auth: AuthService, private router: Router, public dialog: MatDialog,private snack : MatSnackBar) { }
  headphones = [];
  speakers = [];
  items = [];
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
opendialog1(i)
{
   this.dialog.open(DialogHeadphonesComponent, {data: i});
}
// tslint:disable-next-line: typedef
opendialog2(i)
{
  this.dialog.open(DialogSpeakersComponent, {data: i});
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
ngOnInit(): void {
  this.getOrders();
  this.auth.gethead()
.subscribe(
  res => {
    this.headphones = res;
  },
  err => {
    if (err instanceof HttpErrorResponse){
      if (err.status === 401){
        this.router.navigate(['/login']);
      }
    }
  }
);

  this.auth.getspeaker()
.subscribe(
  res => {
    this.speakers = res;
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

