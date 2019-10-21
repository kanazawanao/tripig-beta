import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-selected-locations',
  templateUrl: './selected-locations.component.html',
  styleUrls: ['./selected-locations.component.scss'],
})
export class SelectedLocationsComponent implements OnInit {
  @Input() selectedPlaceList: Place[] = [];

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
