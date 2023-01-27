import { TestBed } from '@angular/core/testing';

import { SupportengineersService } from './supportengineers.service';

describe('SupportengineersService', () => {
  let service: SupportengineersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportengineersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
