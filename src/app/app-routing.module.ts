import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateJewelComponent } from './create-jewel/create-jewel.component';
import { RemoveComponent } from './remove/remove.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/cart', component: CartComponent},
  {path: 'home/cart/checkout', component: CheckoutComponent},
  {path: 'createJewel', component: CreateJewelComponent},
  {path: 'admin/remove', component: RemoveComponent},
  {path: 'home/product/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
