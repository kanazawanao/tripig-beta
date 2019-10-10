import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/firestore/place.service';
import { AuthService } from 'src/app/services/firestore/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aria } from 'src/app/models/aria';
import { ModalController } from '@ionic/angular';
import { SelectedLocationsComponent } from '../parts/selected-locations/selected-locations.component';

@Component({
  selector: 'app-place-regist',
  templateUrl: './place-regist.component.html',
  styleUrls: ['./place-regist.component.scss']
})
export class PlaceRegistComponent implements OnInit {
  @Input() aria: Aria = new Aria();
  processName = 'regist';
  place: Place = new Place();
  results?: google.maps.places.PlaceResult[];
  selected: google.maps.places.PlaceResult[] = [];
  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    public detector: ChangeDetectorRef
  ) {
    this.place.uId = this.auth.userId;
  }

  ngOnInit() {}

  regist() {
    this.placeService.addPlace(this.aria.id, this.place);
    this.openSnackBar('registered');
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

  async guide() {
    const selected = this.selected;
    const modal = await this.modalCtrl.create({
      component: SelectedLocationsComponent,
      componentProps: { selected }
    });
    return await modal.present();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
