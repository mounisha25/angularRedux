


import { Status } from './my-cart/cart';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 addCoin(status) {
   if(status === true)
    this.store.dispatch({
      type: 'Products',
      payload: <Status> {
       status:status
      }
    });
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/