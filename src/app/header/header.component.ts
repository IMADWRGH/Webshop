import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/Cart.model';
import { CartService } from '../services/cart.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService, private store: StoreService) { }
  private _cart: Cart = { items: [] };
  itemsQuantity: number = 7;

  ngOnInit(): void {
    console.log("the number of items " + this.itemsQuantity);

  }

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }


  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.ClearCart();
  }

}
