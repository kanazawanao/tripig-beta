import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-business-hours',
  templateUrl: './business-hours.component.html',
  styleUrls: ['./business-hours.component.scss']
})
export class BusinessHoursComponent implements OnInit {
  @Input() place: Place = new Place();
  constructor() {}

  ngOnInit() {}
}
