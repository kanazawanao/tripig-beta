import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserGroupComponent } from './user-group.component';
import { MaterialModule } from '../material/material.module';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { UserGroups } from 'src/app/models/user-group';

describe('UserGroupComponent', () => {
  let component: UserGroupComponent;
  let fixture: ComponentFixture<UserGroupComponent>;

  beforeEach(async(() => {
    const userGroupService = jasmine.createSpyObj('UserGroupService', ['getUserGroup']);
    userGroupService.getUserGroup.and.returnValue( of(new UserGroups()) );
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        UserGroupComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
      providers: [
        {
          provide: UserGroupService,
          useValue: userGroupService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
