import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/Cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _sackBar: MatSnackBar) { }

  addTocart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id == item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this._sackBar.open('1 item add to cart', 'ok', { duration: 3000 });
  }

  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }

  ClearCart(): void {
    this.cart.next({ items: [] });
    this._sackBar.open('cart is cleared', 'ok', { duration: 3000 });
  }
}
