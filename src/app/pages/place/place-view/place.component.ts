import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Prefecture } from 'src/app/pages/place/parts/prefecture/prefecture';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlaceService } from 'src/app/services/firestore/place.service';
import { AuthService } from 'src/app/services/firestore/auth.service';
import { Observable } from 'rxjs';
import { Aria } from 'src/app/models/aria';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  @Input() aria: Aria = new Aria();
  processName = 'update';
  placeSearchCondition: Place = new Place();
  prefectures: Prefecture[] = [];
  selectedPlace?: Place;
  destinations: Place[] = [];
  places$?: Observable<Place[]>;
  canCreateRoot = false;
  constructor(
    private placeService: PlaceService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.placeSearchCondition.uId = this.auth.userId;
  }

  ngOnInit() {}

  select(place: Place) {
    this.places$ = undefined;
    this.selectedPlace = place;
  }

  delete(place: Place) {
    this.placeService.deletePlace(this.aria.id, place);
    this.destinations.forEach((d, index) => {
      if (d.id === place.id) {
        this.destinations.splice(index, 1);
      }
    });
    this.openSnackBar('deleted');
    this.selectedPlace = undefined;
  }

  update(place: Place) {
    this.placeService.updatePlace(this.aria.id, place);
    this.selectedPlace = undefined;
    this.updateDestination(place);
    this.openSnackBar('updated');
  }

  updateDestination(place: Place) {
    this.destinations.forEach((d, index) => {
      if (d.id === place.id) {
        this.destinations[index] = place;
      }
    });
  }

  addDestination(place: Place) {
    let deleted = false;
    this.destinations.forEach((d, index) => {
      if (d.id === place.id) {
        deleted = true;
        this.destinations.splice(index, 1);
      }
    });
    if (!deleted) {
      this.destinations.push(place);
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }

  selectAria(prefectures: Prefecture[]) {
    this.prefectures = prefectures;
  }

  search() {
    // TODO: 検索中であることを表示できたら嬉しい
    this.places$ = this.placeService.searchPlaces(
      this.aria.id,
      this.placeSearchCondition,
      this.prefectures
    );
    this.selectedPlace = undefined;
    this.destinations = [];
    this.openSnackBar('searched');
    // TODO: 検索結果が０件の場合の処理実装したい
  }

  random() {
    this.places$ = undefined;
    this.destinations = [];
    const allPlaces$ = this.placeService.searchPlaces(
      this.aria.id,
      this.placeSearchCondition,
      this.prefectures
    );
    allPlaces$.subscribe(a => {
      this.selectedPlace = a[Math.floor(Math.random() * a.length)];
    });
    this.openSnackBar('selected');
  }

  clear() {
    this.selectedPlace = undefined;
    this.places$ = undefined;
    this.destinations = [];
    this.prefectures = [];
    this.placeSearchCondition = new Place();
    this.placeSearchCondition.uId = this.auth.userId;
    this.canCreateRoot = false;
  }

  createRoot() {
    this.canCreateRoot = true;
  }
}
