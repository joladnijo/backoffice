import { Observable } from 'rxjs';
import { Asset } from '../models';

export interface AssetFilter {
  /**
   * Beállítja a megadott szűrőt, amivel a getFilteredAssetTree() válasz szűrve lesz.
   *
   * @param filter
   * @see getFilteredAssetTree
   */
  setFilter(filter: string): void;

  /**
   * Visszaadja az aktuális filtert.
   */
  getFilter(): string;

  /**
   * Törli az összes alkalmazott szűrőt
   */
  clearFilter(): void;

  /**
   * Visszatér a szűrt Asset listával szülő -> gyermek formában (ha a gyermekben megtalálható a string)
   */
  getFilteredAssetTree(): Observable<Asset[]>;
}
