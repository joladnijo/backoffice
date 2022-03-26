import { TestBed } from '@angular/core/testing';

import { AssetFilterService } from './asset-filter.service';
import { AssetServiceMock } from './asset.service.mock';

describe('AssetFilterService', () => {
  let service: AssetFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AssetServiceMock
      ]
    });
    service = TestBed.inject(AssetFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
