import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const modules = [
  MatIconModule,
  MatInputModule,
  DragDropModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule
];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
