import { TestBed } from '@angular/core/testing';

import { StoresrestaurantsService } from './storesrestaurants.service';

describe('StoresrestaurantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoresrestaurantsService = TestBed.get(StoresrestaurantsService);
    expect(service).toBeTruthy();
  });
});
