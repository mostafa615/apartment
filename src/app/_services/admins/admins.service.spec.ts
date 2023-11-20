/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminsService } from './admins.service';

describe('Service: Admins', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminsService]
    });
  });

  it('should ...', inject([AdminsService], (service: AdminsService) => {
    expect(service).toBeTruthy();
  }));
});
