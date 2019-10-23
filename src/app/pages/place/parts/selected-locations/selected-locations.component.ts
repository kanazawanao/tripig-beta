import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-selected-locations',
  templateUrl: './selected-locations.component.html',
  styleUrls: ['./selected-locations.component.scss']
})
export class SelectedLocationsComponent implements OnInit {
  @Input() selectedPlaceList: Place[] = [];
  @ViewChild('mapWrapper', { static: false }) mapElement!: ElementRef;
  firstPlace: Place = new Place();
  lastPlace: Place = new Place();
  waypoints: google.maps.DirectionsWaypoint[] = [];
  map: google.maps.Map | null = null;
  marker?: google.maps.Marker;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    const directionService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    this.initPoints();
    if (this.selectedPlaceList[0].latLng) {
      const request: google.maps.DirectionsRequest = {
        origin: this.firstPlace.latLng,
        destination: this.lastPlace.latLng,
        travelMode: google.maps.TravelMode.WALKING,
        waypoints: this.waypoints
      };
      directionService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          if (this.selectedPlaceList[0].latLng) {
            this.setMap(this.selectedPlaceList[0].latLng);
            directionsRenderer.setMap(this.map);
            directionsRenderer.setDirections(result);
          }
        }
      });
    }
  }

  private initPoints() {
    if (this.selectedPlaceList.length > 0) {
      for (let i = 0; i < this.selectedPlaceList.length; i++) {
        if (i === 0) {
          this.firstPlace = this.selectedPlaceList[0];
        } else if (i === this.selectedPlaceList.length - 1) {
          this.lastPlace = this.selectedPlaceList[i];
        } else {
          const p: google.maps.DirectionsWaypoint =  {
            location: this.selectedPlaceList[i].latLng,
          };
          this.waypoints.push(p);
        }
      }
    }
  }

  setMap(latLng: google.maps.LatLng) {
    const mapOptions: google.maps.MapOptions = {
      center: latLng,
      zoom: 16,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
