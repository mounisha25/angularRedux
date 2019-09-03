import { Component} from '@angular/core';
import { Cart } from '../my-cart/cart';
import { cartList } from '../my-cart/my-cart.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  selectedList = cartList;
  

}