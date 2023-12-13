import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
})
export class HomeComponent {
  clos = 3;
  categories: string | undefined;
  onColsCountChange(colsNUm: number): void {
    this.clos = colsNUm;
  }

  onShowCategory(category: string): void {
    this.categories = category
  }
}
