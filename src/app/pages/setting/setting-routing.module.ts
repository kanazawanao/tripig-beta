import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserGroupJoinComponent } from './user-group-join/user-group-join.component';

const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'userGroup',
    component: UserGroupComponent
  },
  {
    path: 'userGroupJoin',
    component: UserGroupJoinComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
