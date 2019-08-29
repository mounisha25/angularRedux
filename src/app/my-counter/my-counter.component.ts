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
    this.count$ = store.pipe(select('count'));
    this.http.get<Cart[]>("/assets/db.json")
      .subscribe(data => {
   this.productList=data;
        console.log(this.productList);
      });
  }

  products() {
    this.store.dispatch(products());
   
  }

  sellers() {
    this.store.dispatch(sellers());
  }

}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/