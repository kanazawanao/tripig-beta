import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { UserGroups } from 'src/app/models/user-group';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  private collection: AngularFirestoreCollection<UserGroups>;
  private document: AngularFirestoreDocument<UserGroups>;
  private userId: string;
  constructor(
    private auth: AuthService,
    private afStore: AngularFirestore
  ) {
    this.userId = this.auth.userId;
    this.collection = this.afStore.collection<UserGroups>('user-group');
    this.document = this.collection.doc<UserGroups>(`${this.userId}`);
  }

  addUserGroup(userGroups: UserGroups): void {
    this.collection
      .doc(this.userId)
      .set(Object.assign({}, JSON.parse(JSON.stringify(userGroups))));
  }

  updateUserGroup(userGroups: UserGroups): void {
    this.collection
      .doc(this.userId)
      .set(Object.assign({}, JSON.parse(JSON.stringify(userGroups))));
  }

  getUserGroup(): Observable<UserGroups | undefined> {
    return this.document.valueChanges();
  }
}
