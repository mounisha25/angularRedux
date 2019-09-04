import { Cart } from './my-cart/cart';
import {Action} from '@ngrx/store';
export const Products = 'Products';
export const Sellers = 'Sellers';
export function cartReducer(state:Cart[]= [],action)
{
  switch(action.type){
    case Products:
      return[...state,action.payload];
    case Sellers:
      return[...state,action.payload];
    default:
      return state;
  }
}


