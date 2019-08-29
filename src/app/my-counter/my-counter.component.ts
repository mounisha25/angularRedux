import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { products,sellers } from '../counter.actions';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>;
 
productList :Cart[]
  constructor(private store: Store<{ count: number }>,private http:HttpClient) {
    // this.count$ = store.pipe(select('count'));
   
  }

  products() {
  
     this.http.get<Cart[]>("/assets/db.json")
      .subscribe(data => {
   this.productList=Object.values(data);
        console.log(this.productList);
       
      });
  //   this.store.dispatch(products());
   
   }

  sellers() {
     this.http.get<Cart[]>("/assets/db.json")
      .subscribe(data => {
   this.productList=Object.values(data);
        console.log(this.productList);
       
      });
   }
   navigate()
   {
    //  router.navigateByUrl('/inbox/33/messages/44')
   }

}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/