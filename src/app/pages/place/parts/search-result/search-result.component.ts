import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromCore from 'src/app/store';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  placeList: Place[] = [];
  constructor(private store: Store<FromCore.State>) {}

  ngOnInit() {
    this.store.select(FromCore.getSearchedPlaceList).subscribe(list => {
      this.placeList = JSON.parse(JSON.stringify(list));
    });
  }
}
