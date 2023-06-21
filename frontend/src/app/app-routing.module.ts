import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './componets/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},   // in tag/:tag tag is literal and /:tag is paramter
  {path: 'food/:id',component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
];  // here we can add our routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
