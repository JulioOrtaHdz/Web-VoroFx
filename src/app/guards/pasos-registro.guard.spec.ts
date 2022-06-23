import { TestBed } from '@angular/core/testing';

import { PasosRegistroGuard } from './pasos-registro.guard';

describe('PasosRegistroGuard', () => {
  let guard: PasosRegistroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PasosRegistroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
