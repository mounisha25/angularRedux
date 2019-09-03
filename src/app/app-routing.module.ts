import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellersComponent } from './sellers/sellers.component';
import { ProductsComponent }   from './products/products.component';
import { MyCartComponent } from './my-cart/my-cart.component';

const routes: Routes = [
   
  { path: 'products', component:ProductsComponent },
  { path:'cartCom', component:MyCartComponent },
  { path:'sellers', component:SellersComponent}
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}