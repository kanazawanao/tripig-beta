import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CoreReducer from 'src/app/store/core.reducer';
import * as CoreActions from 'src/app/store/core.actions';
import { Place } from 'src/app/models/place';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private store: Store<CoreReducer.State>) { }

  setSearchedPlaceList(searchedPlaceList: Place[]) {
    this.store.dispatch(CoreActions.setSearchedPlaceList({ searchedPlaceList }));
  }

  setPlace(place: Place) {
    this.store.dispatch(CoreActions.setPlace({ place }));
  }
}
