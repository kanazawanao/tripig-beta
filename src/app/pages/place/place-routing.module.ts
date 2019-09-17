import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceComponent } from './place-view/place.component';
import { PlaceRegistComponent } from './place-regist/place-regist.component';

const routes: Routes = [
  {
    path: 'placeRegist',
    component: PlaceRegistComponent,
  },
  {
    path: 'placeList',
    component: PlaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }
