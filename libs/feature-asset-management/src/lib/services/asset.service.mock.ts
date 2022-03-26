import { Injectable } from '@angular/core';
import { AssetService } from './asset.service.interface';
import { Observable, of } from 'rxjs';
import { Asset, assets } from '../models';

@Injectable()
export class AssetServiceMock implements AssetService {
  getAssetTree$(): Observable<Asset[]> {
    return of(assets);
  }

  getAssets$(): Observable<Asset[]> {
    return of([]);
  }
}
