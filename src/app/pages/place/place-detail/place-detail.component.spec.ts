import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlaceDetailComponent } from './place-detail.component';
import { MaterialModule } from '../material/material.module';
import { SelectPrefecturesComponent } from 'src/app/pages/place/parts/prefecture/select-prefectures/select-prefectures.component';

describe('PlaceDetailComponent', () => {
  let component: PlaceDetailComponent;
  let fixture: ComponentFixture<PlaceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        PlaceDetailComponent,
        SelectPrefecturesComponent
      ],
      imports: [
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
