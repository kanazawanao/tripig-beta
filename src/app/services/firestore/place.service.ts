import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Place } from '../../models/place';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Prefecture } from 'src/app/pages/place/parts/prefecture/prefecture';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private collection: AngularFirestoreCollection<Place>;
  userId = '';
  constructor(private auth: AuthService, private afStore: AngularFirestore) {
    this.userId = this.auth.userId;
    this.collection = this.afStore
      .collection('users')
      .doc(this.userId)
      .collection<Place>('places');
  }

  addPlace(place: Place): void {
    console.log(place);
    const id = (place.id = this.afStore.createId());
    this.collection
      .doc(id)
      .set(Object.assign({}, JSON.parse(JSON.stringify(place))));
  }

  updatePlace(place: Place) {
    this.collection
      .doc(place.id)
      .update(Object.assign({}, JSON.parse(JSON.stringify(place))));
  }

  getAllPlace(): Observable<Place[]> {
    return this.collection.valueChanges();
  }

  searchPlacesByUserId(userId: string): Observable<Place[]> {
    return this.collection
      .valueChanges()
      .pipe(map(p => p.filter(i => i.uId === userId)));
  }

  searchPlaces(
    condition: Place,
    prefectures: Prefecture[]
  ): Observable<Place[]> {
    return this.collection
      .valueChanges()
      .pipe(
        map(p =>
          p.filter(
            i =>
              (prefectures.length === 0 ||
                i.prefecture === '' ||
                prefectures.find(
                  pre => i.prefecture.indexOf(pre.name) !== -1
                )) &&
              (condition.category.length === 0 ||
                i.category.length === 0 ||
                condition.category.find(c => i.category.indexOf(c) !== -1)) &&
              i.went === condition.went &&
              (condition.gid == null || condition.gid === ''
                ? i.uId === condition.uId
                : condition.gid === i.gid)
          )
        )
      );
  }

  deletePlace(place: Place) {
    this.collection.doc(place.id).delete();
  }
}
