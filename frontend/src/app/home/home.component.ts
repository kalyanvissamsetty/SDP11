import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  activate()
  {
    // tslint:disable-next-line: triple-equals
    if ( this.search == 'mobiles' || this.search == 'mobiles' || this.search == 'Mobiles' || this.search == 'Mobile' || this.search == "mobiles" || this.search == "Mobiles" || this.search == "phone" || this.search == "Phone" || this.search == "mobile" || this.search == "mobiles" || this.search == "smart phone" || this.search == "Smart phone" || this.search == "smart phones" || this.search == "Smart phones" || this.search == " Smart Phones" || this.search == "phones" || this.search =="Phones"){
      this.qw();
    }
    else if(this.search == 'kids' || this.search == 'children' || this.search == 'child' || this.search == 'toys' || this.search == 'teddybears' || this.search == 'teddy bears' || this.search == 'teddy bear')
    {
      this.route.navigate((['/kids']));
    }
    else if(this.search == "laptop" || this.search == "laptops" || this.search == "Laptop" || this.search == "Laptops")
    {
      this.route.navigate(['/laptops']);
    }
    else if(this.search == "headphone" || this.search == "headphones" || this.search == "Headphone" || this.search == "Headphones" || this.search == "earphone" || this.search =="earphones" || this.search == "Earphone" || this.search =="Earphones" || this.search == "mouse" || this.search == "mouses" || this.search == "Mouse" || this.search == "Mouses" )
    {
      this.route.navigate(['/electronics']);
    }
    else if(this.search == '')
    {
      alert('Type Anything to Search');
    }
    else if(this.search == "laptop bag" || this.search == "laptop bags" || this.search == "Laptop bag" || this.search == "Laptop bags" || this.search == "bag" || this.search =="bags" || this.search == "Bag" || this.search == "Bags")
    {
      this.route.navigate(['/laptopaccessories']);
    }  
    else if(this.search == "tv" || this.search == "tvs" || this.search == "Tv" || this.search == "Tvs" || this.search == "television" || this.search =="Television" || this.search == "televisions" || this.search =="Televisions")
      {
        this.route.navigate(['/telivisions']);
      }
      else if(this.search == 'men fashion' || this.search == 'shirts' || this.search == 'shirt' || this.search == 'pants' || this.search == 'pant' || this.search == 'men')
      {
        this.men();
      }
      else if(this.search == 'women' || this.search == 'women fashion' || this.search == 'footwear' || this.search == 'tops' || this.search == 'bottomwear' || this.search == 'watches' )
      {
        this.women();
      }
      else if(this.search == 'home' || this.search == 'home appliances' || this.search == 'appliances')
      {
        this.homeapp();
      }
      else if(this.search == 'furniture')
      {
        this.route.navigate(['/furniture']);
      }
    else{
      alert('Page not Found');
    }
  }
  // tslint:disable-next-line: typedef
  qw()
  {
    this.route.navigate(['/mobiles']);
  }
  // tslint:disable-next-line: typedef
  mobiles()
  {
    this.route.navigate(['/mobiles']);
  }
  // tslint:disable-next-line: typedef
  men()
  {
    this.route.navigate(['/menfashion']);
  }
  // tslint:disable-next-line: typedef
  laptops()
  {
    this.route.navigate(['/laptops']);
  }
  // tslint:disable-next-line: typedef
  women()
  {
    this.route.navigate(['/womenfashion']);
  }
  // tslint:disable-next-line: typedef
  homeapp()
  {
    this.route.navigate(['/homeappliances']);
  }
  // tslint:disable-next-line: typedef
  tel()
  {
    this.route.navigate(['/telivisions']);
  }
}
