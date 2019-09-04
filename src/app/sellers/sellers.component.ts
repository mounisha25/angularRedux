import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { products,sellers } from '../cart.actions';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../my-cart/cart';
import { Router } from '@angular/router';
import myCartComponent = require("../my-cart/my-cart.component"); 
export var sellerList :Cart = null ;

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent  {

 count$: Observable<number>;
 id;
productList :Cart[];

  constructor(private store: Store<{ count: number }>,private http:HttpClient,private router:Router) {
    // this.count$ = store.pipe(select('count'));
      this.http.get<Cart[]>("/assets/sellers.json")
      .subscribe(data => {
   this.productList=Object.values(data);
        // console.log(this.productList);
        myCartComponent.cartList = null;
       //console.log(myCartComponent.cartList);
      });
 
  }


   navigateTo(id:number)
   {
     //console.log(id);
      sellerList = this.productList[0][id];
      //console.log(sellerList);
   }
}