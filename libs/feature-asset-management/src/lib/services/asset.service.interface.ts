import { Observable } from 'rxjs';
import { Asset } from '../models';

export interface AssetService {
  /**
   * Flat list
   */
  getAssets$(): Observable<Asset[]>;

  /**
   * Fa szerkezetű lista (gyökér -> gyermek kategória formában)
   *
   * @see Asset
   */
  getAssetTree$(): Observable<Asset[]>;
}
