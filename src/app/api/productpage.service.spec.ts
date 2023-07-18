/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductpageService } from './productpage.service';

describe('Service: Productpage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductpageService]
    });
  });

  it('should ...', inject([ProductpageService], (service: ProductpageService) => {
    expect(service).toBeTruthy();
  }));
});
