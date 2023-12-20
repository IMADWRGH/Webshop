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
  }
  onAddQuantity(items: Array<CartItem>): number {
    return items.map((item) => item.quantity + 1).reduce((prev, current) => prev + current, 0)
  }
  // onRemoveQuantity(_t65: any) {
  //   throw new Error('Method not implemented.');
  // }
  // onClearCart() {
  //   throw new Error('Method not implemented.');
  // }
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  // onCheckout() {
  //   throw new Error('Method not implemented.');
  // }
  // onRemoveFromCart(_t107: any) {
  //   throw new Error('Method not implemented.');
  // }







}
