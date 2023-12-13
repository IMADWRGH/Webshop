import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/Cart.model';
@Component({
  selector: 'app-cart',
  templateUrl: `cart.component.html`,
})
export class CartComponent implements OnInit {

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }


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

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    // 'name',
    // 'price',
    // 'quantity',
    // 'id',
    // 'total',
    // 'action'
  ];


}
