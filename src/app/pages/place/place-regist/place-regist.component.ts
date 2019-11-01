import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/firestore/place.service';
import { AuthService } from 'src/app/services/firestore/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aria } from 'src/app/models/aria';
import { ModalController } from '@ionic/angular';
import { SelectedLocationsComponent } from '../parts/selected-locations/selected-locations.component';
import { Store } from '@ngrx/store';
import * as FromCore from 'src/app/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-place-regist',
  templateUrl: './place-regist.component.html',
  styleUrls: ['./place-regist.component.scss']
})
export class PlaceRegistComponent implements OnInit, OnDestroy {
  @Input() aria: Aria = new Aria();
  place: Place = new Place();
  private onDestroy$ = new Subject();

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private store: Store<FromCore.State>
  ) {
    this.place.uId = this.auth.userId;
  }

  ngOnInit() {
    this.store.select(FromCore.getPlace)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(place => {
        this.place = place;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  regist() {
    this.placeService.addPlace(this.aria.id, this.place);
    this.openSnackBar('registered');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }

  async guide() {
    const modal = await this.modalCtrl.create({
      component: SelectedLocationsComponent
    });
    return await modal.present();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
