import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Prefecture } from '../prefecture/prefecture';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() placeSearchCondition: Place = new Place();
  @Input() prefectures: Prefecture[] = [];
  @Output() selectAria: EventEmitter<Prefecture[]> = new EventEmitter<Prefecture[]>();
  constructor() { }

  ngOnInit() {
  }
  selected(prefectures: Prefecture[]) {
    this.selectAria.emit(prefectures);
  }
}
