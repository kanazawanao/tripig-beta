import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserGroupJoinComponent } from './user-group-join.component';
import { MaterialModule } from '../material/material.module';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { UserGroupService } from 'src/app/services/firestore/user-group.service';
import { UserGroups } from 'src/app/models/user-group';

describe('UserGroupJoinComponent', () => {
  let component: UserGroupJoinComponent;
  let fixture: ComponentFixture<UserGroupJoinComponent>;

  beforeEach(async(() => {
    const userGroupService = jasmine.createSpyObj('UserGroupService', ['getUserGroup']);
    userGroupService.getUserGroup.and.returnValue( of(new UserGroups()) );
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        UserGroupJoinComponent,
      ],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(UserGroupJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
