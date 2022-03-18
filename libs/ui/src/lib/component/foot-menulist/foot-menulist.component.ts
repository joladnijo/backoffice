import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu';

@Component({
  selector: 'jb-ui-foot-menulist',
  template: `
    <nav>
      <ul>
        <li *ngFor='let menuItem of menuItems'>
          <a [routerLink]='menuItem.routerLink'
             [id]='menuItem?.htmlId'
             [matTooltipDisabled]='menuItem?.toolTip === null'
             [matTooltipPosition]='"above"'
             [matTooltip]='menuItem?.toolTip || ""'>
            <fa-icon *ngIf="menuItem.icon" [icon]="menuItem.icon"></fa-icon>{{menuItem.displayedText}}</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./foot-menulist.component.scss']
})
export class FootMenulistComponent {
  @Input() menuItems: MenuItem[] = []
}
