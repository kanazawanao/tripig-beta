import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceComponent } from './place-view/place.component';
import { PlaceRegistComponent } from './place-regist/place-regist.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {
    path: '',
    component: TopComponent
  },
  {
    path: 'placeRegist',
    component: PlaceRegistComponent
  },
  {
    path: 'placeList',
    component: PlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule {}
