import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { CartService } from 'src/app/services/cart.service';


const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
})
export class HomeComponent {

  constructor(private cartService: CartService) { }

  clos = 3;
  rows = ROWS_HEIGHT[this.clos]
  categories: string | undefined;
  onColsCountChange(colsNUm: number): void {
    this.clos = colsNUm;
    this.rows = ROWS_HEIGHT[this.clos];
  }

  onShowCategory(category: string): void {
    this.categories = category
  }

  onAddToCart(product: Product): void {
    this.cartService.addTocart({
      product: product.image,
      name: product.tilte,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
