import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { MaterialModule } from 'src/app/pages/place/material/material.module';
import { AriaRegistComponent } from 'src/app/pages/place/parts/aria-regist/aria-regist.component';
import { PlaceRegistComponent } from 'src/app/pages/place/place-regist/place-regist.component';
import { IonicModule } from '@ionic/angular';
import { PartsModule } from '../place/parts/parts.module';
import { PlaceModule } from '../place/place.module';

@NgModule({
  declarations: [TopComponent],
  entryComponents: [AriaRegistComponent, PlaceRegistComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    MaterialModule,
    IonicModule.forRoot(),
    PlaceModule,
    PartsModule
  ]
})
export class TopModule {}
