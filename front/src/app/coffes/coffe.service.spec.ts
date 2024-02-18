import { TestBed } from '@angular/core/testing';

import { CoffeService } from './coffe.service';

describe('CoffeService', () => {
  let service: CoffeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
