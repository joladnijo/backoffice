import { Injectable } from '@angular/core';
import { AssetService } from './asset.service.interface';
import { Observable, of } from 'rxjs';
import { Asset } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AssetServiceImpl implements AssetService {
  getAssetTree$(): Observable<Asset[]> {
    return of([]);
  }

  getAssets$(): Observable<Asset[]> {
    return of([]);
  }

}
