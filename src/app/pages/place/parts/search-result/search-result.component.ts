import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() results?: google.maps.places.PlaceResult[];
  get places(): Place[] {
    const placeList: Place[] = [];
    if (this.results) {
      for (const result of this.results) {
        const place = new Place();
        place.place = result.name;
        placeList.push(place);
      }
    }
    return placeList;
  }
  constructor() {}

  ngOnInit() {}
}
