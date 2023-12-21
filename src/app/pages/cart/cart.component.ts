import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/Cart.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: `cart.component.html`,
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: "https://via.placeholder.com/150",
      name: "snickers",
      price: 24,
      quantity: 23,
      id: 1,

    }
    ]
  }

  constructor(private cartService: CartService) { }

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    // 'id',
    'total',
    'action'
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
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
