import { TestBed } from '@angular/core/testing';

import { AssetServiceImpl } from './asset.service.impl';

describe('AssetService', () => {
  let service: AssetServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
