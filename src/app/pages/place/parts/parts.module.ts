import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectPrefecturesComponent } from 'src/app/pages/place/parts/prefecture/select-prefectures/select-prefectures.component';
import { SearchPrefectureComponent } from 'src/app/pages/place/parts/prefecture/search-prefecture/search-prefecture.component';
import { SelectCategoryComponent } from 'src/app/pages/place/parts/select-category/select-category.component';
import { SelectGroupComponent } from 'src/app/pages/place/parts/select-group/select-group.component';
import { FilterComponent } from 'src/app/pages/place/parts/filter/filter.component';
import { MapComponent } from 'src/app/pages/place/parts/map/map.component';
import { SearchResultComponent } from 'src/app/pages/place/parts/search-result/search-result.component';
import { MaterialModule } from 'src/app/pages/place/material/material.module';

const components = [
  SelectPrefecturesComponent,
  FilterComponent,
  SelectCategoryComponent,
  SelectGroupComponent,
  SearchPrefectureComponent,
  MapComponent,
  SearchResultComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule, FormsModule, MaterialModule]
})
export class PartsModule {}
