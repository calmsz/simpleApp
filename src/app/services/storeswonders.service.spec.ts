import { TestBed } from '@angular/core/testing';

import { StoreswondersService } from './storeswonders.service';

describe('StoreswondersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreswondersService = TestBed.get(StoreswondersService);
    expect(service).toBeTruthy();
  });
});
