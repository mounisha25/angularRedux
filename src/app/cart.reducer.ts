import { createReducer, on } from '@ngrx/store';
import { products,sellers} from './cart.actions';
import { HttpClient } from '@angular/common/http';
import { Cart } from './my-cart/cart';
export const initialState = 0;

export const cartReducer = createReducer(initialState,
  on(products,state => state - 1),
  on(sellers, state => state - 1),

);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/