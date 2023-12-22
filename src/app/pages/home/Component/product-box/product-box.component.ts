import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: `product-box.component.html`,
})
export class ProductBoxComponent {

  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();
  @Input() product: Product | undefined;

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
