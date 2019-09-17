import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/app/pages/place/material/material.module';
import { SelectPrefecturesComponent } from './select-prefectures.component';

describe('SelectPrefecturesComponent', () => {
  let component: SelectPrefecturesComponent;
  let fixture: ComponentFixture<SelectPrefecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        SelectPrefecturesComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPrefecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
