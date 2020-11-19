import { TestBed } from '@angular/core/testing';

import { CommonEmitService } from './common-emit.service';

describe('CommonEmitService', () => {
  let service: CommonEmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonEmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
