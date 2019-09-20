import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const components = [
  HeaderComponent
];


@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule
  ]
})
export class PartsModule { }
