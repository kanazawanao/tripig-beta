import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceListComponent } from './place-list.component';
import { MaterialModule } from '../material/material.module';
import { PlaceDetailComponent } from 'src/app/pages/place/place-detail/place-detail.component';

describe('PlaceListComponent', () => {
  let component: PlaceListComponent;
  let fixture: ComponentFixture<PlaceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        PlaceListComponent,
        PlaceDetailComponent
      ],
      imports: [
        MaterialModule,
        FormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
