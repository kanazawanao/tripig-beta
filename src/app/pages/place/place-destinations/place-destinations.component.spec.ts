import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PlaceDestinationsComponent } from './place-destinations.component';
import { MaterialModule } from '../material/material.module';

describe('PlaceDestinationsComponent', () => {
  let component: PlaceDestinationsComponent;
  let fixture: ComponentFixture<PlaceDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        PlaceDestinationsComponent
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
