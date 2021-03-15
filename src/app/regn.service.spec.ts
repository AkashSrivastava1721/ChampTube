import { TestBed } from '@angular/core/testing';

import { RegnService } from './regn.service';

describe('RegnService', () => {
  let service: RegnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
