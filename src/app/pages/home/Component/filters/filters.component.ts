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
  @Output() ShowCategory = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;
  categories: string[] | undefined

  constructor(private storeService: StoreService) { }


  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories().subscribe((reponse: Array<string>) => {
      this.categories = reponse;
      console.log(this.categories);
    }
    );
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
  onShowCategory(category: string): void {
    this.ShowCategory.next(category);


  }

}
