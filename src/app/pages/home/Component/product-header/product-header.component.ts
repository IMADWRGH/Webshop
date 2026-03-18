import { trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: 'product-header.component.html'
})
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortCountChange = new EventEmitter<string>();
  sort = 'desc';
  itemsShowCount = 100;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortCountChange.emit(newSort);
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNUm: number): void {
    this.columnsCountChange.emit(colsNUm);
  }
}
