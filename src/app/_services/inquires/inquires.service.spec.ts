/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InquiresService } from './inquires.service';

describe('Service: Inquires', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InquiresService]
    });
  });

  it('should ...', inject([InquiresService], (service: InquiresService) => {
    expect(service).toBeTruthy();
  }));
});
