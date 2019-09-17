import { Component, OnInit } from '@angular/core';
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
  constructor(
    private router: Router,
    private placeService: PlaceService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.place.uId = this.auth.userId;
  }

  ngOnInit() {}

  regist(place: Place) {
    this.placeService.addPlace(place);
    this.openSnackBar('registered');
    this.router.navigate(['placeList']);
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
