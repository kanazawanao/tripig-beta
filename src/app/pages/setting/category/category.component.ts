import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/services/firestore/category.service';
import { Category } from 'src/app/models/category';
import { Observable, Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  categories$?: Observable<Category | undefined>;
  categories: Category = new Category();
  categoryText = '';
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
    this.subscriptions.push(
      this.categories$.subscribe(
        c => (this.categories = c ? c : new Category())
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  regist() {
    this.categories.category.push(this.categoryText);
    this.categoryService.addCategories(this.categories);
    this.categoryText = '';
    // this.openSnackBar('registered');
    // TODO: 登録したら一覧画面に遷移する？
  }

  delete(i: number) {
    this.categories.category.splice(i, 1);
    this.categoryService.updateCategories(this.categories);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.categories.category,
      event.previousIndex,
      event.currentIndex
    );
    this.categoryService.updateCategories(this.categories);
  }
}
