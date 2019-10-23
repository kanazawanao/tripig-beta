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
  map: google.maps.Map | null = null;
  marker?: google.maps.Marker;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    const directionService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    console.log(this.selectedPlaceList);
    if (this.selectedPlaceList[0].latLng) {
      var request: google.maps.DirectionsRequest = {
        origin: this.selectedPlaceList[0].latLng,
        destination: this.selectedPlaceList[1].latLng,
        travelMode: google.maps.TravelMode.WALKING
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
