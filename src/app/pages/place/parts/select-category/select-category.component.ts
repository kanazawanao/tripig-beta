import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Category } from 'src/app/models/category';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/firestore/category.service';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit, OnDestroy {
  @Input() place: Place = new Place();
  subscriptions: Subscription[] = [];
  categories$?: Observable<Category | undefined>;
  categories: Category =  new Category();
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
    this.subscriptions.push(this.categories$.subscribe(c => this.categories = c ? c : new Category()));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
