import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { MatBadgeModule } from '@angular/material/badge';
import { HomeuiComponent } from './homeui/homeui.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { KidsComponent } from './kids/kids.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelivisionComponent } from './telivision/telivision.component';
import { SportsComponent } from './sports/sports.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HomeappliancesComponent } from './homeappliances/homeappliances.component';
import { WomenfashionComponent } from './womenfashion/womenfashion.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { MenComponent } from './men/men.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaptopaccessoriesComponent } from './laptopaccessories/laptopaccessories.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path: 'mobiles', component: MobilesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menfashion', component: MenComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'laptops', component: LaptopsComponent},
  {path: 'laptopaccessories', component: LaptopaccessoriesComponent},
  {path: 'womenfashion', component: WomenfashionComponent},
  {path: 'homeappliances', component: HomeappliancesComponent},
  {path: 'furniture', component: FurnitureComponent},
  {path: 'sportsitems', component: SportsComponent},
  {path: 'telivisions', component: TelivisionComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'cart', component: CartComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'uiofhome', component: HomeuiComponent},
  {path: 'test', component: TestComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule, MatButtonModule, MatCardModule, MatGridListModule, CommonModule,
    MatDialogModule, BrowserAnimationsModule, MatBadgeModule, MatSnackBarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
