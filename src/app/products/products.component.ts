import { Component,OnInit} from '@angular/core';
import { Cart } from '../my-cart/cart';
import { cartList } from '../my-cart/my-cart.component';
import { sellerList } from '../sellers/sellers.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedList:Cart;
  selectedSellers:Cart;
  constructor()
{
  console.log(cartList);
 
}  
ngOnInit()
{
  this.selectedList = cartList;
  this.selectedSellers = sellerList;
 // console.log(this.selectedSellers);
}

}