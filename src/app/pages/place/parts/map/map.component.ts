import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceType, PLACETYPES } from './place-types';
import { PRICELEVELS, PriceLevel } from './price-level';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() place: Place = new Place();
  @Input() results?: google.maps.places.PlaceResult[];
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  @Output() setEvent: EventEmitter<any> = new EventEmitter();
  @ViewChild('mapWrapper', { static: false }) mapElement!: ElementRef;
  map?: google.maps.Map;
  marker?: google.maps.Marker;
  nextPageToken = '';
  placeText = '';
  placeOptions = PLACETYPES;
  priceOptions = PRICELEVELS;
  placeSelected: PlaceType = new PlaceType();
  priceSelected: PriceLevel = new PriceLevel();
  constructor() {}
  ngOnInit() {}

  search() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.placeText }, (result, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        this.setMap(result[0].geometry.location);
        this.searchPlace(result[0].geometry.location);
        this.place.place = this.placeText;
        this.place.category = result[0].types;
        this.place.addr = result[0].formatted_address;
        this.place.prefecture = result[0].address_components.filter(
          component => {
            return component.types.indexOf('administrative_area_level_1') > -1;
          }
        )[0].long_name;
      }
    });
    this.setEvent.emit(this.place);
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
    this.searchPlace(latLng);
  }

  searchPlace(latLng: google.maps.LatLng) {
    if (this.map) {
      const placeService = new google.maps.places.PlacesService(this.map);
      const request: google.maps.places.PlaceSearchRequest = {
        minPriceLevel: 0,
        maxPriceLevel: this.priceSelected.cd,
        rankBy: google.maps.places.RankBy.PROMINENCE,
        location: latLng,
        radius: 500,
        type: this.placeSelected.cd
      };
      placeService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.searchEvent.emit(results);
        }
      });
    }
  }
}
