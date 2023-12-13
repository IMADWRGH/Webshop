import { Component } from '@angular/core';


const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
})
export class HomeComponent {
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
}
