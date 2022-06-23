import { TestBed } from '@angular/core/testing';

import { SalirRegistroGuard } from './salir-registro.guard';

describe('SalirRegistroGuard', () => {
  let guard: SalirRegistroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalirRegistroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
