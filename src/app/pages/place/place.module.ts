import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceComponent } from './place-view/place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceRegistComponent } from './place-regist/place-regist.component';
import { PlaceDestinationsComponent } from './place-destinations/place-destinations.component';
import { PartsModule } from './parts/parts.module';
import { MaterialModule } from 'src/app/pages/place/material/material.module';

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceDetailComponent,
    PlaceListComponent,
    PlaceRegistComponent,
    PlaceDestinationsComponent,
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    FormsModule,
    PartsModule,
    MaterialModule
  ]
})
export class PlaceModule { }
