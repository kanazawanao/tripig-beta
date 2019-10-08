import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AriaService } from 'src/app/services/firestore/aria.service';
import { Aria } from 'src/app/models/aria';

@Component({
  selector: 'app-aria-regist',
  templateUrl: './aria-regist.component.html',
  styleUrls: ['./aria-regist.component.scss']
})
export class AriaRegistComponent implements OnInit {
  aria: Aria = new Aria();
  constructor(
    private modalCtrl: ModalController,
    private ariaService: AriaService
  ) {}

  ngOnInit() {
    this.aria = new Aria();
  }

  close() {
    this.modalCtrl.dismiss();
  }

  regist() {
    this.ariaService.addAria(this.aria);
    this.modalCtrl.dismiss();
  }
}
