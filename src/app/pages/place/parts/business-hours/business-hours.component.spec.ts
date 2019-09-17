import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/app/pages/place/material/material.module';
import { BusinessHoursComponent } from './business-hours.component';

describe('BusinessHoursComponent', () => {
  let component: BusinessHoursComponent;
  let fixture: ComponentFixture<BusinessHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BusinessHoursComponent
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
