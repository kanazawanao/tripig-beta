import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  OnInit,
} from '@angular/core';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() place: Place = new Place();
  @ViewChild('mapWrapper', { static: false }) mapElement!: ElementRef;
  map?: google.maps.Map;
  marker?: google.maps.Marker;
  placeText = '';

  constructor() {}
  ngOnInit() {}

  search() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.placeText }, (result, status) => {
      this.setMap(result[0].geometry.location);
      console.log(result);
      this.place.place = this.placeText;
      this.place.addr = result[0].formatted_address;
      this.place.prefecture = result[0].address_components.filter((component) => {
        return component.types.indexOf('administrative_area_level_1') > -1;
      })[0].long_name;
    });
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
}
