import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';

import { UserGroupService } from './user-group.service';
import { environment } from 'src/environments/environment';

describe('UserGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
    ]
  }));

  it('should be created', () => {
    const service: UserGroupService = TestBed.get(UserGroupService);
    expect(service).toBeTruthy();
  });
});
