import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { MaterialModule } from 'src/app/pages/place/material/material.module';
import { AriaRegistComponent } from 'src/app/pages/place/parts/aria-regist/aria-regist.component';
import { IonicModule } from '@ionic/angular';
import { PartsModule } from '../place/parts/parts.module';

@NgModule({
  declarations: [TopComponent],
  entryComponents: [AriaRegistComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    MaterialModule,
    IonicModule.forRoot(),
    PartsModule
  ]
})
export class TopModule {}
