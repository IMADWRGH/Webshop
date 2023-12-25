import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: `filters.component.html`,
  styles: [
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {



  constructor(private storeService: StoreService) { }


  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories().subscribe((category) => {
      this.categories = category;
    }
    );
  }

  @Output() ShowCategory = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined

  onShowCategory(category: string): void {
    this.ShowCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }


}
