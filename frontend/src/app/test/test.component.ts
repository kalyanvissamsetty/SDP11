import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
items = [{
    img: String,
    name: String,
    email: String,
    price: Number,
    quantity: Number,
}];
promo;
dis;
used = true;
price = 0;
len = 0;
users = [];
userdetails = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  address1: '',
  address2 : '',
  country: '',
  State: '',
  zipcode: 400001,
  cardname: '',
  cardnumber: '',
  cvv: '',
  date : '',
  typeofdelivery: ''
};
horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private auth: AuthService , private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.auth.getusers()
    .subscribe(
      res =>{
        this.users = res;
      },
      err =>
      {
        console.log('error');
      }
    );
    this.auth.getorders()
    .subscribe(
      res => {
        this.items = res;
        this.len = this.items.length;
        // tslint:disable-next-line: prefer-for-of
        for (let j = 0; j < this.items.length; j++)
        {
          this.price = this.price + (res[j].quantity * res[j].price);
        }
      },
      err =>
      {
        console.log('error');
      }
      );
    
  }
  swall(){  
    for (let j = 0; j < this.users.length ; j++)
    {
      if(localStorage.getItem('email') == this.users[j].email)
      {
        this.users[j].orders = this.users[j].orders + 1;
        const obj = {
          orders : this.users[j].orders
        }
        this.auth.orderplaced(obj)
        .subscribe(() => {console.log(''); });
      }
    }
    Swal.fire('Thank you...', 'Order Placed succesfully!', 'success')  
  }  
  promogene()
  {
    for (let j = 0; j < this.users.length ; j++)
    {
      if(localStorage.getItem('email') == this.users[j].email)
      {
          if (this.users[j].orders == 0)
          {
            if (this.promo == 'NEW10' && this.used)
            {
              this.price = this.price - ( this.price / 10);
              this.used = false;
              Swal.fire('NEW10 Applied Successfuly', 'Enjoy Your Discount', 'success')
             }
             
          }
          else{
            Swal.fire("Sorry, Can't Apply", 'NEW10 cannot be applied ', 'warning')
          }
      }
    }  

    
  }
  // tslint:disable-next-line: typedef
  // total(){
  //   let j;
  //   for (j = 0 ; j < this.items.length ; j++)
  //   {
  //     this.price = this.price + (this.items.quantity * this.items.price);
  //   }
  // }

}
