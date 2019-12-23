import { TestBed } from '@angular/core/testing';

import { HeroCacheService } from './hero-cache.service';

describe('HeroCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroCacheService = TestBed.get(HeroCacheService);
    expect(service).toBeTruthy();
  });
});
