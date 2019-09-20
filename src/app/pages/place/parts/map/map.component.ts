import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  OnInit,
} from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceType, PLACETYPES } from './place-types';

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
  options = PLACETYPES;
  selected: PlaceType = new PlaceType();
  constructor() {}
  ngOnInit() {}

  search() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.placeText }, (result, status) => {
      if(status === google.maps.GeocoderStatus.OK){
        this.setMap(result[0].geometry.location);
        this.place.place = this.placeText;
        this.place.category = result[0].types;
        this.place.addr = result[0].formatted_address;
        this.place.prefecture = result[0].address_components.filter((component) => {
          return component.types.indexOf('administrative_area_level_1') > -1;
        })[0].long_name;
      }
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

    const placeService = new google.maps.places.PlacesService(this.map);
    const request: google.maps.places.PlaceSearchRequest = {
      location: latLng,
      radius: 500,
      type: this.selected.cd
    }
    placeService.nearbySearch(request, (results, status) => {
      if(status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(r => console.log(r));
      }
    });
  }
}
