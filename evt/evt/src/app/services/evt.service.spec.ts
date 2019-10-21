import { TestBed } from '@angular/core/testing';

import { EvtService } from './evt.service';

describe('EvtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvtService = TestBed.get(EvtService);
    expect(service).toBeTruthy();
  });
});
