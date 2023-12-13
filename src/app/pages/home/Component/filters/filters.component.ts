import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: `filters.component.html`,
  styles: [
  ]
})
export class FiltersComponent {
  @Output() ShowCategory = new EventEmitter<string>();
  categories = [
    'shoes', 'Nike_shoes'
  ]

  onShowCategory(category: string): void {
    this.ShowCategory.emit(category);
  }


}
