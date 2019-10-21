import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AriaService } from './aria.service';
import { environment } from 'src/environments/environment';

describe('AriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
    ]
  }));

  it('should be created', () => {
    const service: AriaService = TestBed.get(AriaService);
    expect(service).toBeTruthy();
  });
});
