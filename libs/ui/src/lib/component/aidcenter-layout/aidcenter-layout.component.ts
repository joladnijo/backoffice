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
      <div class="content" gdArea="content">
        <ng-content select="[layout-content]"></ng-content>
      </div>
      <div class="details" gdArea="details">
        <ng-content select="[layout-details]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./aidcenter-layout.component.scss']
})
export class AidcenterLayoutComponent {

}
