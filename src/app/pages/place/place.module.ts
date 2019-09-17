import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceComponent } from './place-view/place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceRegistComponent } from './place-regist/place-regist.component';
import { SelectPrefecturesComponent } from 'src/app/pages/place/parts/prefecture/select-prefectures/select-prefectures.component';
import { SearchPrefectureComponent } from 'src/app/pages/place/parts/prefecture/search-prefecture/search-prefecture.component';
import { SelectCategoryComponent } from 'src/app/pages/place/parts/select-category/select-category.component';
import { SelectGroupComponent } from 'src/app/pages/place/parts/select-group/select-group.component';
import { FilterComponent } from 'src/app/pages/place/parts/filter/filter.component';
import { BusinessHoursComponent } from 'src/app/pages/place/parts/business-hours/business-hours.component';
import { MapComponent } from 'src/app/pages/place/parts/map/map.component';
import { MaterialModule } from './material/material.module';
import { PlaceDestinationsComponent } from './place-destinations/place-destinations.component';

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceDetailComponent,
    PlaceListComponent,
    PlaceRegistComponent,
    SelectPrefecturesComponent,
    FilterComponent,
    SelectCategoryComponent,
    BusinessHoursComponent,
    SelectGroupComponent,
    SearchPrefectureComponent,
    MapComponent,
    PlaceDestinationsComponent,
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class PlaceModule { }
