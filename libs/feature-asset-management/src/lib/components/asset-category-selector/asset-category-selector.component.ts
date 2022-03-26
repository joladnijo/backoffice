import { Component, EventEmitter, Output } from '@angular/core';
import { distinctUntilChanged, filter, Observable } from 'rxjs';
import { Asset } from '../../models';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AssetFilterService } from '../../services/asset-filter.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark';

@Component({
  selector: 'jb-asset-category-selector',
  template: `
    <mat-form-field>
      <mat-label>Mire van szükség</mat-label>
      <input type="search"
             #search
             [formControl]="filterFormControl"
             placeholder="Kezdj el gépelni..."
             aria-label="Kategória"
             matInput
             [matAutocomplete]="auto"
             (focusin)="assetFilter.setFilter(search.value)"
      >
      <button mat-flat-button matSuffix (click)="assetFilter.clearFilter(); search.value = ''" *ngIf="search.value">
        <fa-icon [icon]="faClose"></fa-icon>
      </button>

      <mat-autocomplete #auto="matAutocomplete" (optionSelected)="optionSelected($event)">
        <mat-optgroup *ngFor="let assetParent of assetTree$ | async" [label]="assetParent.name">
          <mat-option *ngFor="let asset of assetParent?.children" [value]="asset">
            <span class="name">{{asset.name}}</span>
            <mat-label class="description" *ngIf="asset.description">- {{asset.description}}</mat-label>
          </mat-option>
        </mat-optgroup>
      </mat-autocomplete>
    </mat-form-field>
  `,
  styleUrls: ['./asset-category-selector.component.scss']
})
@UntilDestroy()
export class AssetCategorySelectorComponent {
  faClose = faCircleXmark;

  @Output()
  public assetSelected = new EventEmitter<Asset>();

  public assetTree$: Observable<Asset[]> = this.assetFilter.getFilteredAssetTree();
  public filterFormControl = new FormControl('');

  constructor(public assetFilter: AssetFilterService) {
    this.filterFormControl.valueChanges
      .pipe(
        untilDestroyed(this),
        // debounceTime(200),
        distinctUntilChanged(),
        filter(value => typeof value === 'string')
      )
      .subscribe(
        value => this.assetFilter.setFilter(value)
      );
  }

  optionSelected(item: MatAutocompleteSelectedEvent) {
    this.assetSelected.emit(item.option.value)
  }
}
