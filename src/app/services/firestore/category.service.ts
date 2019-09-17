import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/firestore/auth.service';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private collection: AngularFirestoreCollection<Category>;
  private document: AngularFirestoreDocument<Category>;
  private userId: string;
  constructor(
    private afStore: AngularFirestore,
    private auth: AuthService
  ) {
    this.userId = this.auth.userId;
    this.collection = this.afStore.collection<Category>('categories');
    this.document = this.collection.doc<Category>(`${this.userId}`);
  }

  addCategories(categories: Category): void {
    this.collection
      .doc(this.userId)
      .set(Object.assign({}, JSON.parse(JSON.stringify(categories))));
  }

  updateCategories(categories: Category) {
    this.collection
      .doc(this.userId)
      .update(Object.assign({}, JSON.parse(JSON.stringify(categories))));
  }

  getCategories(): Observable<Category | undefined> {
    return this.document.valueChanges();
  }
}
