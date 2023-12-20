import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: `product-box.component.html`,
})
export class ProductBoxComponent {

  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();
  product: Product | undefined = {
    id: 1,
    tilte: "shoes",
    price: 24,
    category: "shoes",
    description: "nice product",
    image: " https://via.placeholder.com/150",
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
