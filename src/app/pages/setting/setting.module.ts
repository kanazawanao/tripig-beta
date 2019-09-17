import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { CategoryComponent } from './category/category.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserGroupJoinComponent } from './user-group-join/user-group-join.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    CategoryComponent,
    UserGroupComponent,
    UserGroupJoinComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    MaterialModule,
  ]
})
export class SettingModule { }
