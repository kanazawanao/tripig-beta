import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistComponent } from './regist.component';

describe('RegistComponent', () => {
  let component: RegistComponent;
  let fixture: ComponentFixture<RegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
