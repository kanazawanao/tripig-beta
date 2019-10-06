import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaRegistComponent } from './aria-regist.component';

describe('AriaRegistComponent', () => {
  let component: AriaRegistComponent;
  let fixture: ComponentFixture<AriaRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriaRegistComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
