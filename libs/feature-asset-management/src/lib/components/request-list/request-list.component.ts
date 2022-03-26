import { Component, Input } from '@angular/core';
import { AidCenterAssetsRequested } from '@joladnijo-backoffice/backend-model';

@Component({
  selector: 'jb-asset-request-list',
  template: `
    <ng-content></ng-content>
    <ul>
      <li *ngFor="let asset of requestedAssets">{{asset |json}}</li>
    </ul>
  `,
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent {
  @Input()
  requestedAssets: AidCenterAssetsRequested[] = [];
}
