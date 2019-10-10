import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-selected-locations',
  templateUrl: './selected-locations.component.html',
  styleUrls: ['./selected-locations.component.scss'],
})
export class SelectedLocationsComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
