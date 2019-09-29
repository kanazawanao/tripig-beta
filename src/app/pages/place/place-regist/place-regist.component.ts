import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/firestore/place.service';
import { AuthService } from 'src/app/services/firestore/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-regist',
  templateUrl: './place-regist.component.html',
  styleUrls: ['./place-regist.component.scss']
})
export class PlaceRegistComponent implements OnInit {
  processName = 'regist';
  place: Place = new Place();
  results?: google.maps.places.PlaceResult[];
  constructor(
    private router: Router,
    private placeService: PlaceService,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    public detector: ChangeDetectorRef
  ) {
    this.place.uId = this.auth.userId;
  }

  ngOnInit() {}

  regist() {
    this.placeService.addPlace(this.place);
    this.openSnackBar('registered');
    this.router.navigate(['/place/placeList']);
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
  placeSet(place: Place) {
    this.place = place;
  }
  resultsSet(results: google.maps.places.PlaceResult[]) {
    this.results = results;
    this.detector.detectChanges();
  }
}
