import { TestBed } from '@angular/core/testing';

import { ApilaravelService } from './apilaravel.service';

describe('ApilaravelService', () => {
  let service: ApilaravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApilaravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
