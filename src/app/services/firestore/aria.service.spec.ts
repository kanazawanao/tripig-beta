import { TestBed } from '@angular/core/testing';

import { AriaService } from './aria.service';

describe('AriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AriaService = TestBed.get(AriaService);
    expect(service).toBeTruthy();
  });
});
