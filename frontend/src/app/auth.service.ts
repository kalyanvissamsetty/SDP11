import { Injectable , NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = null;
  private registerUrl = 'http://localhost:3000/api/register';
  private mobilesUrl = 'http://localhost:3000/api/mobiles';
  private loginUrl = 'http://localhost:3000/api/login';
  private menUrl = 'http://localhost:3000/api/menfashion';
  private accessories = 'http://localhost:3000/api/accessories';
  private laptops = 'http://localhost:3000/api/laptops';
  private laptopbags = 'http://localhost:3000/api/laptopbags';
  private mouses = 'http://localhost:3000/api/mouses';
  private watch = 'http://localhost:3000/api/watches';
  private top = 'http://localhost:3000/api/tops';
  private sun = 'http://localhost:3000/api/sunglasses';
  private handbag = 'http://localhost:3000/api/handbag';
  private foot = 'http://localhost:3000/api/footwear';
  private bottom = 'http://localhost:3000/api/bottomwear';
  private homeapp = 'http://localhost:3000/api/homeappliances';
  private furn = 'http://localhost:3000/api/furniture';
  private sport = 'http://localhost:3000/api/sportsitems';
  private tel = 'http://localhost:3000/api/telivisions';
  private toyss = 'http://localhost:3000/api/toys';
  private teddy = 'http://localhost:3000/api/teddy';
  private speak = 'http://localhost:3000/api/speakers';
  private head = 'http://localhost:3000/api/headphones';
  private cartUrl = 'http://localhost:3000/api/orderCart';
  private use = 'http://localhost:3000/api/user';
  private laptopcart = 'http://localhost:3000/api/orderLaptop';
  private menfashioncart = 'http://localhost:3000/api/ordermenfashion';
  private orderurl = 'http://localhost:3000/api/order';
  private usersurl = 'http://localhost:3000/api/users';
  private placedurl = 'http://localhost:3000/api/ordersplaced';
  loggedin = false;
  count;
  constructor(private http: HttpClient, private router: Router) { }
  orderplaced(or)
  {
    return this.http.put<any>(`${this.placedurl}/${localStorage.getItem('email')}`, or);
  }
  sendEmail(url, data) {
    return this.http.post(url, data);
  }
  // tslint:disable-next-line: typedef
  incrementquantity(name, quantity)
  {
    return this.http.put(`http://localhost:3000/api/quantityset/${localStorage.getItem('email')}/${name}`, quantity);
  }
  // tslint:disable-next-line: typedef
  addtocart(item){
    const obj  = {​​
      email : localStorage.getItem('email'),
      name : item.name,
      price: item.price,
      img : item.img,
      quantity : 1,
    };
    return this.http.post<any>(this.orderurl, obj);
  }
   // tslint:disable-next-line: typedef
   getorders(){
    return this.http.get<any>(`http://localhost:3000/api/order/${localStorage.getItem('email')}`);
   }
    // tslint:disable-next-line: typedef
    logout()
    {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      this.router.navigate(['/login']);
    }

    // tslint:disable-next-line: typedef
    deleteorder(name)
    {
      return this.http.delete(`http://localhost:3000/api/deleteorder/${localStorage.getItem('email')}/${name}`);
    }

    // tslint:disable-next-line: typedef
    deleteAllOrders()
    {
      return this.http.delete(`http://localhost:3000/api/deleteallorders/${localStorage.getItem('email')}`);
    }
    // tslint:disable-next-line: typedef
  Loggedin()
  {
    if (this.user == null)
    {
      this.router.navigate(['login']);
    }
  }
  // tslint:disable-next-line: typedef
  registerUser(user)
  {
    return this.http.post<any>(this.registerUrl, user);
  }
   // tslint:disable-next-line: typedef
   loginUser(user)
   {
      return this.http.post<any>(this.loginUrl, user);
   }
   // tslint:disable-next-line: typedef
   getProducts() {
    return this.http.get<any>(this.mobilesUrl);
  }
  getusers()
  {
    return this.http.get<any>(this.usersurl);
  }
  // tslint:disable-next-line: typedef
  getmen(){
    return this.http.get<any>(this.menUrl);
  }
  // tslint:disable-next-line: typedef
  getaccessories(){
    return this.http.get<any>(this.accessories);
  }
  // tslint:disable-next-line: typedef
  getlaptops(){
    return this.http.get<any>(this.laptops);
  }
  // tslint:disable-next-line: typedef
  getlaptopbags(){
    return this.http.get<any>(this.laptopbags);
  }
  // tslint:disable-next-line: typedef
  getmouses(){
    return this.http.get<any>(this.mouses);
  }
  // tslint:disable-next-line: typedef
  getwatches()
  {
    return this.http.get<any>(this.watch);
  }
  // tslint:disable-next-line: typedef
  gettop()
  {
    return this.http.get<any>(this.top);
  }
  // tslint:disable-next-line: typedef
  getsunglasses()
  {
    return this.http.get<any>(this.sun);
  }
  // tslint:disable-next-line: typedef
  gethandbags()
  {
    return this.http.get<any>(this.handbag);
  }
  // tslint:disable-next-line: typedef
  getfootwear()
  {
    return this.http.get<any>(this.foot);
  }
  // tslint:disable-next-line: typedef
  getbottomwear()
  {
    return this.http.get<any>(this.bottom);
  }
    // tslint:disable-next-line: typedef
    gethomeappli()
    {
      return this.http.get<any>(this.homeapp);
    }
    // tslint:disable-next-line: typedef
    getfurn()
    {
      return this.http.get<any>(this.furn);
    }
    // tslint:disable-next-line: typedef
    getsport()
    {
      return this.http.get<any>(this.sport);
    }
    // tslint:disable-next-line: typedef
    gettel()
    {
      return this.http.get<any>(this.tel);
    }
    // tslint:disable-next-line: typedef
    Addtocart(cart)
    {

      return this.http.put<any>(`${this.cartUrl}/${cart.id}`, cart);
    }

    // tslint:disable-next-line: typedef
    getUser(user)
    {
      return this.http.get(`${this.use}/${user._id}`);
    }
    // tslint:disable-next-line: typedef
    gettoys()
    {
      return this.http.get<any>(this.toyss);
    }
    // tslint:disable-next-line: typedef
    getteddy()
    {
      return this.http.get<any>(this.teddy);
    }
    // tslint:disable-next-line: typedef
    getspeaker()
    {
      return this.http.get<any>(this.speak);
    }
    // tslint:disable-next-line: typedef
    gethead()
    {
      return this.http.get<any>(this.head);
    }

  // tslint:disable-next-line: typedef
  AddtoLaptopCart(product)
  {
    return this.http.put(`${this.laptopcart}/${product.id}`, product);
  }
  // tslint:disable-next-line: typedef
  addmenfashioncart(i)
  {
    return this.http.put(`${this.menfashioncart}/${i.id}`, i);
  }

  // tslint:disable-next-line: typedef
  RemoveAll(user)
  {
    return this.http.put(`http://localhost:3000/api/removeall/${user.id}`, user);
  }
}
