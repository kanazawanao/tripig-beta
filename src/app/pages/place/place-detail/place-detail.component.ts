import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {
  @Input() selectedPlace: Place = new Place();
  @Input() processName = '';
  @Output() processing: EventEmitter<any> = new EventEmitter();
  get googleMapLink(): string {
    return this.selectedPlace
      ? 'https://www.google.com/maps/dir/?api=1&destination=' +
          this.selectedPlace.addr +
          '&travelmode=driving'
      : '';
  }
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.processing.emit(this.selectedPlace);
  }
}
