/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatueService } from './statue.service';

describe('Service: Statue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatueService]
    });
  });

  it('should ...', inject([StatueService], (service: StatueService) => {
    expect(service).toBeTruthy();
  }));
});
