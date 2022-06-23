import { TestBed } from '@angular/core/testing';

import { LangToggleService } from './services/lang-toggle.service';

describe('LangToggleService', () => {
  let service: LangToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
