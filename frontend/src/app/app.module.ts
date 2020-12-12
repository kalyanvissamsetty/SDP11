import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {provideRoutes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogMobilesComponent } from './dialog-mobiles/dialog-mobiles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenComponent } from './men/men.component';
import { DialogMenComponent } from './dialog-men/dialog-men.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DialogAccessoriesComponent } from './dialog-accessories/dialog-accessories.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { DialogLaptopsComponent } from './dialog-laptops/dialog-laptops.component';
import { LaptopaccessoriesComponent } from './laptopaccessories/laptopaccessories.component';
import { DialogLaptopaccessoriesComponent } from './dialog-laptopaccessories/dialog-laptopaccessories.component';
import { DialogMousesComponent } from './dialog-mouses/dialog-mouses.component';
import { WomenfashionComponent } from './womenfashion/womenfashion.component';
import { WatchesComponent } from './watches/watches.component';
import { TopsComponent } from './tops/tops.component';
import { SunglassesComponent } from './sunglasses/sunglasses.component';
import { HandbagComponent } from './handbag/handbag.component';
import { FootwearComponent } from './footwear/footwear.component';
import { BottomwearComponent } from './bottomwear/bottomwear.component';
import { HomeappliancesComponent } from './homeappliances/homeappliances.component';
import { DialogHomeappliancesComponent } from './dialog-homeappliances/dialog-homeappliances.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { DialogFurnitureComponent } from './dialog-furniture/dialog-furniture.component';
import { SportsComponent } from './sports/sports.component';
import { DialogSportsComponent } from './dialog-sports/dialog-sports.component';
import { TelivisionComponent } from './telivision/telivision.component';
import { DialogTelivisionComponent } from './dialog-telivision/dialog-telivision.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { KidsComponent } from './kids/kids.component';
import { DialogSpeakersComponent } from './dialog-speakers/dialog-speakers.component';
import { DialogHeadphonesComponent } from './dialog-headphones/dialog-headphones.component';
import { DialogToysComponent } from './dialog-toys/dialog-toys.component';
import { DialogTeddyComponent } from './dialog-teddy/dialog-teddy.component';
import { HomeuiComponent } from './homeui/homeui.component';
import {MatBadgeModule} from '@angular/material/badge';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MobilesComponent,
    HomeComponent,
    DialogMobilesComponent,
    MenComponent,
    DialogMenComponent,
    AccessoriesComponent,
    DialogAccessoriesComponent,
    LaptopsComponent,
    DialogLaptopsComponent,
    LaptopaccessoriesComponent,
    DialogLaptopaccessoriesComponent,
    DialogMousesComponent,
    WomenfashionComponent,
    WatchesComponent,
    TopsComponent,
    SunglassesComponent,
    HandbagComponent,
    FootwearComponent,
    BottomwearComponent,
    HomeappliancesComponent,
    DialogHomeappliancesComponent,
    FurnitureComponent,
    DialogFurnitureComponent,
    SportsComponent,
    DialogSportsComponent,
    TelivisionComponent,
    DialogTelivisionComponent,
    NavbarComponent,
    CartComponent,
    ElectronicsComponent,
    KidsComponent,
    DialogSpeakersComponent,
    DialogHeadphonesComponent,
    DialogToysComponent,
    DialogTeddyComponent,
    HomeuiComponent,
    TestComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatBadgeModule
  ],
  entryComponents: [DialogMobilesComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
