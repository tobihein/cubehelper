import { TestBed } from '@angular/core/testing';

import { AlgorithmserviceService } from './algorithmservice.service';

describe('AlgorithmserviceService', () => {
  let service: AlgorithmserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgorithmserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
