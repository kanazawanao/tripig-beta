import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PREFECTURES, Aria, Prefecture } from '../prefecture';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-search-prefecture',
  templateUrl: './search-prefecture.component.html',
  styleUrls: ['./search-prefecture.component.scss']
})
export class SearchPrefectureComponent implements OnInit {
  @Input() place: Place = new Place();
  @Input() prefectures: Prefecture[] = [];
  @Output() selectAria: EventEmitter<Prefecture[]> = new EventEmitter<Prefecture[]>();
  ariaGroups: Aria[] = PREFECTURES;

  constructor() {}

  ngOnInit() {}

  seelctedAria(ariaName: string) {
    this.ariaGroups.forEach(group => {
      if (group.aria === ariaName && !!group.prefectures) {
        this.prefectures = group.prefectures;
      }
    });
    this.selectAria.emit(this.prefectures);
  }

  seelctedPrefecture() {
    this.selectAria.emit(this.prefectures);
  }
}
