import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { Place } from 'src/app/models/place';
import { PlaceType, PLACETYPES } from './place-types';
import { Aria } from 'src/app/models/aria';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow!: MapInfoWindow;
  @ViewChild(GoogleMap, {static: false}) map!: GoogleMap;
  @Input() aria: Aria = new Aria();
  @Input() place: Place = new Place();
  @Output() setEvent: EventEmitter<any> = new EventEmitter();
  center: google.maps.LatLng =  new google.maps.LatLng(37.421995, -122.084092);
  markerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 16;
  display?: google.maps.LatLngLiteral;
  placeText = '';
  placeOptions = PLACETYPES;
  RADIUS = 1000;
  placeSelected: PlaceType = { cd: 'restaurant', name: 'レストラン', category: '' };

  constructor(
    private mapService: MapService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.placeText = this.aria.ariaName;
    this.search();
  }

  onMapClick(event: google.maps.MouseEvent) {
    this.addMarker(event.latLng);
  }

  addMarker(latLng: google.maps.LatLng) {
    this.markerPositions.push(latLng.toJSON());
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
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
    this.center = latLng;
    this.addMarker(latLng);
  }

  searchPlace(latLng: google.maps.LatLng) {
    if (this.map) {
      const placeList: Place[] = [];
      const placeService = new google.maps.places.PlacesService(this.map._googleMap);
      const request: google.maps.places.PlaceSearchRequest = {
        rankBy: google.maps.places.RankBy.PROMINENCE,
        location: latLng,
        radius: this.RADIUS,
        type: this.placeSelected.cd
      };
      placeService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (const result of results) {
            const place: Place = {
              addr: result.formatted_address ? result.formatted_address : '',
              selected: false,
              place: result.name,
              category: result.types ? result.types : [],
              gid: '',
              id: '',
              rating: result.rating,
              latLng: result.geometry ? result.geometry.location : undefined,
              prefecture: result.address_components
                ? result.address_components.filter(component => {
                    return (
                      component.types.indexOf('administrative_area_level_1') >
                      -1
                    );
                  })[0].long_name
                : '',
              price: 0,
              uId: '',
              went: false
            };
            placeList.push(place);
          }
          this.mapService.setSearchedPlaceList(placeList);
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
