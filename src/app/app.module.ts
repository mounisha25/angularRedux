import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
 import { cartReducer } from './cart.reducer';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductsComponent } from './products/products.component';
import { SellersComponent } from './sellers/sellers.component';

@NgModule({
  declarations: [AppComponent, MyCartComponent, ProductsComponent, SellersComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ Cart: cartReducer }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


