import { Component, EventEmitter, Output } from '@angular/core';
import { Asset } from '../../models';

@Component({
  selector: 'jb-asset-add-widget',
  template: `
    <div>
      <mat-card *ngIf="displayFilter">
        <mat-card-title>Add meg mire van szükség</mat-card-title>
        <mat-card-content>
          <jb-asset-category-selector (assetSelected)="selected($event)"></jb-asset-category-selector>
        </mat-card-content>
        <mat-card-footer align="end">
          <button mat-button color="accent" (click)="displayFilter = !displayFilter">Mégsem</button>
        </mat-card-footer>
      </mat-card>
      <div class="action">
        <button mat-flat-button color="primary" (click)="displayFilter = !displayFilter">
          Új adomány kérése
        </button>
      </div>
    </div>

  `,
  styleUrls: ['./add-widget.component.scss']
})
export class AddWidgetComponent {
  @Output()
  public assetSelected = new EventEmitter<Asset>();

  public displayFilter = false;

  public selected(asset: Asset) {
    this.assetSelected.emit(asset);
    this.displayFilter = !this.displayFilter;
  }
}
