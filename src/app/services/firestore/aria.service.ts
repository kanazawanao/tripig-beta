import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Aria } from 'src/app/models/aria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AriaService {
  private collection: AngularFirestoreCollection<Aria>;
  userId = '';
  constructor(private auth: AuthService, private afStore: AngularFirestore) {
    this.userId = this.auth.userId;
    this.collection = this.afStore
      .collection('users')
      .doc(this.userId)
      .collection<Aria>('aria');
  }
  addAria(aria: Aria): void {
    const id = (aria.id = this.afStore.createId());
    this.collection
      .doc(id)
      .set(Object.assign({}, JSON.parse(JSON.stringify(aria))));
  }

  updateAria(aria: Aria) {
    this.collection
      .doc(aria.id)
      .update(Object.assign({}, JSON.parse(JSON.stringify(aria))));
  }

  getAllAria(): Observable<Aria[]> {
    return this.collection.valueChanges();
  }
}
