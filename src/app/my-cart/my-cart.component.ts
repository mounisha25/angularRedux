import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
// import { products,sellers } from '../cart.actions';
import { HttpClient } from '@angular/common/http';
import { Cart,Status } from './cart';
import { Router } from '@angular/router';
export var cartList :Cart = null ;
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})

export class MyCartComponent {
  count$: Observable<number>;
 id;
productList :Cart[];
 TempCart: Observable<Status[]>;
  constructor(private http:HttpClient,private router:Router,private store: Store<AppState>) {
   
    this.TempCart = this.store.select(state => state.cart);
   
      this.http.get<Cart[]>("/assets/products.json")
      .subscribe(data => {
   this.productList=Object.values(data);
        // console.log(this.productList);
       
      });
    cartList = null;
  }


  
   navigateTo(id:number)
   {
    // console.log(id);
      cartList = this.productList[0][id];
      //console.log(cartList);
   }

}


