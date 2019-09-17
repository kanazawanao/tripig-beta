import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material/material.module';
import { CategoryComponent } from './category.component';
import { environment } from 'src/environments/environment';
import { CategoryService } from 'src/app/services/firestore/category.service';
import { of } from 'rxjs';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  beforeEach(async(() => {

    const categoryService = jasmine.createSpyObj('CategoryService', ['getCategories']);
    categoryService.getCategories.and.returnValue( of(undefined) );
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        CategoryComponent
      ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
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
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
