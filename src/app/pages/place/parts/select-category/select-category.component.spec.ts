import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectCategoryComponent } from './select-category.component';
import { MaterialModule } from 'src/app/pages/place/material/material.module';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { CategoryService } from 'src/app/services/firestore/category.service';

describe('SelectCategoryComponent', () => {
  let component: SelectCategoryComponent;
  let fixture: ComponentFixture<SelectCategoryComponent>;

  beforeEach(async(() => {
    const categoryService = jasmine.createSpyObj('CategoryService', ['getCategories']);
    categoryService.getCategories.and.returnValue( of(undefined) );
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        SelectCategoryComponent
      ],
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
      providers: [
        {
          provide: CategoryService,
          useValue: categoryService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
