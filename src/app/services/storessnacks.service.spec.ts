import { TestBed } from '@angular/core/testing';

import { StoressnacksService } from './storessnacks.service';

describe('StoressnacksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoressnacksService = TestBed.get(StoressnacksService);
    expect(service).toBeTruthy();
  });
});
