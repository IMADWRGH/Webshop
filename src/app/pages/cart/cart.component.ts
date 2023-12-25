import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/Cart.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: `cart.component.html`,
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };


  dataSource: CartItem[] = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    });
  }
  onAddQuantity(items: CartItem): void {
    this.cartService.addTocart(items);
  }
  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
  onClearCart() {
    this.cartService.ClearCart();
  }
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  // onCheckout() {
  //   throw new Error('Method not implemented.');
  // }
  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);

  }







}
