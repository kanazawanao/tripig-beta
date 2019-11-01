import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, GoogleMap } from '@angular/google-maps';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import * as FromCore from 'src/app/store';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-selected-locations',
  templateUrl: './selected-locations.component.html',
  styleUrls: ['./selected-locations.component.scss']
})
export class SelectedLocationsComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow!: MapInfoWindow;
  @ViewChild(GoogleMap, {static: false}) map!: GoogleMap;
  selectedPlaceList: Place[] = [];
  center: google.maps.LatLng =  new google.maps.LatLng(37.421995, -122.084092);
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 16;
  firstPlace: Place = new Place();
  lastPlace: Place = new Place();
  waypoints: google.maps.DirectionsWaypoint[] = [];
  marker?: google.maps.Marker;
  constructor(
    private modalCtrl: ModalController,
    private store: Store<FromCore.State>,
  ) {}

  ngOnInit() {
    this.store.select(FromCore.getSearchedPlaceList).subscribe(res => {
      console.log(res);
      this.selectedPlaceList = JSON.parse(JSON.stringify(res));
      this.selectedPlaceList = this.selectedPlaceList.filter(r => r.selected);
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
              directionsRenderer.setMap(this.map._googleMap);
              directionsRenderer.setDirections(result);
            }
          }
        });
      }
    });
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
    this.center = latLng;
    this.markerPositions.push(latLng.toJSON());
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
