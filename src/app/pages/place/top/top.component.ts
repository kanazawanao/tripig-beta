import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AriaRegistComponent } from 'src/app/pages/place/parts/aria-regist/aria-regist.component';
import { AriaService } from 'src/app/services/firestore/aria.service';
import { Observable } from 'rxjs';
import { Aria } from 'src/app/models/aria';
import { PlaceRegistComponent } from '../place-regist/place-regist.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  arias$?: Observable<Aria[]>;
  constructor(
    private modalController: ModalController,
    private ariaService: AriaService
  ) {}

  ngOnInit() {
    this.arias$ = this.ariaService.getAllAria();
  }

  async add() {
    const modal = await this.modalController.create({
      component: AriaRegistComponent
    });
    return await modal.present();
  }

  async addPlace(aria: Aria) {
    const modal = await this.modalController.create({
      component: PlaceRegistComponent,
      componentProps: {
        'aria': aria
      }
    });
    return await modal.present();
  }
}
