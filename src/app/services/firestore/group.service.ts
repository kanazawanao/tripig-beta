import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Group } from 'src/app/models/group';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private collection: AngularFirestoreCollection<Group>;
  constructor(
    private afStore: AngularFirestore
  ) {
    this.collection = this.afStore.collection<Group>('group');
  }

  addGroup(group: Group): string {
    const id = this.afStore.createId();
    group.id = id;
    this.collection
      .doc(id)
      .set(Object.assign({}, JSON.parse(JSON.stringify(group))));
    return id;
  }

  deleteGroup(id: string): void {
    this.collection.doc(id).delete();
  }

  getGroupById(id: string): Observable<Group | undefined> {
    return this.afStore.doc<Group>(`group/${id}`).valueChanges();
  }
}
