import { Injectable } from '@angular/core';
import { AssetFilter } from './asset.filter.interface';
import { combineLatest, map, Observable, Subject } from 'rxjs';
import { Asset } from '../models';
import { AssetServiceMock } from './asset.service.mock';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Injectable({
  providedIn: 'root'
})
@UntilDestroy()
export class AssetFilterService implements AssetFilter {
  private filterString = '';
  private filterSubject: Subject<string> = new Subject<string>();

  constructor(private assetService: AssetServiceMock) {
    this.updateFilter('');
  }

  clearFilter(): void {
    this.updateFilter('');
  }

  getFilter(): string {
    return this.filterString;
  }

  getFilteredAssetTree(): Observable<Asset[]> {
    return combineLatest([
      this.assetService.getAssetTree$(),
      this.filterSubject.pipe(map(item => item.toLocaleLowerCase().normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')))
    ]).pipe(
      untilDestroyed(this),
      map(([fullTree, filterString]) => {
        // a legfelső szinten ha valamivel egyezünk, azt teljesen megtartjuk
        const finalTree = this.filterAssetByString(fullTree, filterString);

        const filteredParentItemIds = finalTree.map(asset => asset.parent_id);
        //al-elemek szűrése, az előre kiválasztott őselemek nélkül

        const childrenTree =
          fullTree
            .filter(parentItem => !filteredParentItemIds.includes(parentItem.parent_id))
            .map(parentItem => ({
              ...parentItem,
              children: parentItem?.children ? this.filterAssetByString(parentItem.children, filterString) : []
            }))
            .filter(parentItem => parentItem.children.length > 0);
        return finalTree.concat(childrenTree);
      })
    );
  }

  setFilter(filter: string): void {
    this.updateFilter(filter);
  }

  private updateFilter(filter: string) {
    this.filterString = filter;
    this.filterSubject.next(this.filterString);
  }

  /**
   * Leszűri a legfelső kapott szintet.
   *
   * @param assetList Szűrendő lista
   * @param filter kisbetűs szűrő
   * @private
   */
  private filterAssetByString(assetList: Asset[], filter: string): Asset[] {
    // TODO: ezeknek egy jelentős része optimalizálható hogy ne kelljen minden alkalommal normalizálni a sztringeket
    return assetList.filter(
      asset => asset.name
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
        .includes(filter))
  }
}
