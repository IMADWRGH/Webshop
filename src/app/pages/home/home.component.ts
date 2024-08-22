import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';


const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  ngOnDestroy(): void {
    if (this.productSubcription) {
      this.productSubcription.unsubscribe();
    }
  }

  clos = 3;
  rows = ROWS_HEIGHT[this.clos]
  categories: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '25';
  category: string | undefined;
  productSubcription: Subscription | undefined
  onColsCountChange(colsNUm: number): void {
    this.clos = colsNUm;
    this.rows = ROWS_HEIGHT[this.clos];
  }

  onShowCategory(category: string): void {
    this.category = category;
    this.getProduct();
    console.log(category)
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

  getProduct(): void {
    this.productSubcription = this.storeService.getAllProduct(this.count, this.sort, this.category)
      .subscribe((_product) => {
        this.products = _product;
      });
    console.log(this.productSubcription)
  }


  onSortCountChange(newSort: string) {
    this.sort = newSort;
    this.getProduct();
  }
  onItemsCountChange(newCount: number): void {
    this.count = newCount.toString();
    this.getProduct();
  }
}
