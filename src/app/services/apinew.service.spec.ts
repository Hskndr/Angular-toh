import { TestBed } from '@angular/core/testing';

import { ApinewService } from './apinew.service';

describe('ApinewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApinewService = TestBed.get(ApinewService);
    expect(service).toBeTruthy();
  });
});
