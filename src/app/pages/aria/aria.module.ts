import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AriaRoutingModule } from './aria-routing.module';
import { MaterialModule } from 'src/app/pages/place/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AriaRoutingModule, MaterialModule]
})
export class AriaModule {}
