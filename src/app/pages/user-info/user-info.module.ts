import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserInfoRoutingModule,
    MaterialModule,
  ]
})
export class UserInfoModule { }
