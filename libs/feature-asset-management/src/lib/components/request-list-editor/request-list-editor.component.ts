import { Component } from '@angular/core';
import { Asset } from '../../models';

@Component({
  selector: 'jb-asset-request-list-editor',
  template: `
    <ng-container *ngIf="!selectedAssets.length">
      <h5>Adomány kérése</h5>
      <p>
        Új adomány kéréséhez kattints az "új adomány kérése" gombra és válassz a listából!<br/>
        Az adomány típus kiválasztása után fogsz tudni megjegyzést fűzni, hogy pontosan milyen adományra lenne
        szükségetek.
      </p>
    </ng-container>
    <mat-card *ngFor="let asset of selectedAssets; let index = index">
      <mat-card-subtitle>Adomány kategória:</mat-card-subtitle>
      <mat-card-title>{{asset.name}}</mat-card-title>
      <mat-card-content>
        <mat-form-field>
          <mat-label>Pontos adomány típus / megjegyzés</mat-label>
          <input matInput type="text" placeholder="Pld: pokróc, nedves törlőkendő, stb.">
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-flat-button color="warn" (click)="removeAsset(index)">Törlés</button>
      </mat-card-actions>
    </mat-card>
    <mat-divider></mat-divider>
    <jb-asset-add-widget (assetSelected)="addAsset($event)"></jb-asset-add-widget>
  `,
  styleUrls: ['./request-list-editor.component.scss']
})
export class RequestListEditorComponent {
  selectedAssets: Asset[] = [];

  /*
    [
    {
      "id": "UUID_gyerek higiénia, törlőkendő",
      "parent_id": "UUID_Gyerek",
      "name": "gyerek higiénia, törlőkendő",
      "description": "description - gyerek higiénia, törlőkendő"
    },
    {
      "id": "UUID_gyerek higiénia, törlőkendő",
      "parent_id": "UUID_Gyerek",
      "name": "gyerek higiénia, törlőkendő",
      "description": "description - gyerek higiénia, törlőkendő"
    }
  ];
*/
  addAsset(asset: Asset) {
    this.selectedAssets.push(asset);
  }

  removeAsset(index: number) {
    this.selectedAssets.splice(index, 1);
  }
}
