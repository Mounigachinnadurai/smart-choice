/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShelvesService } from './shelves.service';

describe('Service: Shelves', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShelvesService]
    });
  });

  it('should ...', inject([ShelvesService], (service: ShelvesService) => {
    expect(service).toBeTruthy();
  }));
});
