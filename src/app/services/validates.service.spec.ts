import { TestBed } from '@angular/core/testing';

import { ValidatesService } from './validates.service';

describe('ValidatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidatesService = TestBed.get(ValidatesService);
    expect(service).toBeTruthy();
  });
});
