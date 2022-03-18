import { Component } from '@angular/core';

@Component({
  selector: 'jb-ui-aidcenter-layout',
  template: `
    <div
      class="ac-container"
      gdAreas.sm="content | details"
      gdColumn.sm="none"

      gdAreas.gt-md="content details"
      gdColumns.gt-md="0.8fr auto"
      gdGap.gt-md="38px"
    >
      <div gdArea="content">
        <div class="container-box">
          <h3>Hírfolyam</h3>
            <mat-form-field>
              <mat-label>Select an option</mat-label>
              <mat-select>
                <mat-option value="1">Option 1</mat-option>
                <mat-option value="2">Option 2</mat-option>
                <mat-option value="3">Option 3</mat-option>
              </mat-select>
            </mat-form-field>
        </div>
        <div class="container-box"><h4>Amire szükség van</h4></div>
        <div class="container-box"><h4>Amit már nem fogadunk</h4></div>
      </div>
      <div gdArea="details">
        <div class="container-box"><h4>Gyűjtőhely részletei</h4></div>
        <div class="container-box"><h4>Alapadatok</h4></div>
        <div class="container-box"><h4>Borító kép</h4></div>
        <div class="container-box"><h4>Pénzadományok</h4></div>
      </div>
    </div>
  `,
  styleUrls: ['./aidcenter-layout.component.scss']
})
export class AidcenterLayoutComponent {

}
