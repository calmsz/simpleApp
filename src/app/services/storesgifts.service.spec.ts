import { TestBed } from '@angular/core/testing';

import { StoresgiftsService } from './storesgifts.service';

describe('StoresgiftsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoresgiftsService = TestBed.get(StoresgiftsService);
    expect(service).toBeTruthy();
  });
});
