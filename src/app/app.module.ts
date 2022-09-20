import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FoodComponent } from './food/food.component';
import { MenuComponent } from './menu/menu.component';
import { RestauComponent } from './restau/restau.component'
import { RouterModule } from '@angular/router';
import { ResDetailComponent } from './res-detail/res-detail.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchfilterPipe } from './shared/searchfilter.pipe';
import { FilterPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RestaurantsComponent,
    FoodComponent,
    MenuComponent,
    RestauComponent,
    ResDetailComponent,
    CartComponent,
    SignupComponent,
    SearchfilterPipe,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
