/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MirrorService } from './mirror.service';

describe('Service: Mirror', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MirrorService]
    });
  });

  it('should ...', inject([MirrorService], (service: MirrorService) => {
    expect(service).toBeTruthy();
  }));
});
