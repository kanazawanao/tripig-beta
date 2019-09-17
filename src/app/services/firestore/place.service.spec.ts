import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PlaceService } from './place.service';
import { environment } from 'src/environments/environment';

describe('PlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
    ]
  }));

  it('should be created', () => {
    const service: PlaceService = TestBed.get(PlaceService);
    expect(service).toBeTruthy();
  });
});
