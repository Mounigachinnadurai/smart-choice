/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserItemService } from './userItem.service';

describe('Service: UserItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserItemService]
    });
  });

  it('should ...', inject([UserItemService], (service: UserItemService) => {
    expect(service).toBeTruthy();
  }));
});
