import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'signup', component:SignupComponent},

  {
    path:'home', component: HomeComponent
  },
  { path:'restau', component: RestaurantsComponent },
  { path:'menu' , component:MenuComponent },
  {  path:'cart', component:CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
