import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/models/place';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-place-destinations',
  templateUrl: './place-destinations.component.html',
  styleUrls: ['./place-destinations.component.scss']
})
export class PlaceDestinationsComponent implements OnInit {
  @Input() destinations: Place[] = [];
  waypoints = '';
  get googleMapLinks(): string {
    return this.destinations.length !== 0
      ? 'https://www.google.com/maps/dir/?api=1' +
          this.waypoints +
          '&travelmode=driving'
      : '';
  }
  constructor() {}

  ngOnInit() {
    this.createWayoption();
  }

  createWayoption() {
    const des: string[] = [];
    let lastPlace: Place = new Place();
    this.destinations.forEach((d, index) => {
      if (this.destinations.length === index + 1) {
        lastPlace = d;
      } else {
        des.push(d.addr);
      }
    });
    this.waypoints =
      '&destination=' + lastPlace.addr + '&waypoints=' + des.join(' | ');
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.destinations, event.previousIndex, event.currentIndex);
    console.log(this.destinations);
    this.createWayoption();
  }
}
