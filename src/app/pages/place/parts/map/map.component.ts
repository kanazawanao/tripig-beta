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
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aria } from 'src/app/models/aria';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() aria: Aria = new Aria();
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
  RADIUS = 1000;
  placeSelected: PlaceType = {cd: 'restaurant', name: 'レストラン'};
  priceSelected: PriceLevel = new PriceLevel();
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.placeText = this.aria.ariaName;
    this.search();
  }

  search() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.placeText }, (result, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        this.setMap(result[0].geometry.location);
        this.searchPlace(result[0].geometry.location);
        this.place.place = this.placeText;
        this.place.category = result[0].types;
        this.place.addr = result[0].formatted_address;
        console.log(result[0].address_components);
        this.place.prefecture = result[0].address_components.filter(
          component => {
            return component.types.indexOf('administrative_area_level_1') > -1;
          }
        )[0].long_name;
        this.setEvent.emit(this.place);
      } else {
        this.openSnackBar('not found');
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
        radius: this.RADIUS,
        type: this.placeSelected.cd
      };
      placeService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.searchEvent.emit(results);
        }
      });
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
