import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart.reducer';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [AppComponent, MyCartComponent, ProductsComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: cartReducer }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/