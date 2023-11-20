import { TestBed } from '@angular/core/testing';

import { OnwerService } from './onwer.service';

describe('OnwerService', () => {
  let service: OnwerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnwerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
