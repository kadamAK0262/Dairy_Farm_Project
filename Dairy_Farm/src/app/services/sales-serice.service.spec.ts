import { TestBed } from '@angular/core/testing';

import { SalesSericeService } from './sales-serice.service';

describe('SalesSericeService', () => {
  let service: SalesSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
