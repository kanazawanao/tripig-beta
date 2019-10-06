import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { MaterialModule } from 'src/app/pages/place/material/material.module';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, TopRoutingModule, MaterialModule]
})
export class TopModule {}
