import { Component } from '@angular/core';
/**
 * DashboardLayoutComponent
 *
 * A layoutot megvalósító komponens. Csak a design szerves részét képező tartalmat tartalmazhat, minden mást az ezt
 * felhasználó komponensnek kell implementálni.
 *
 * Design terv: https://www.figma.com/file/qk594QthXG49oolZ3ZDrpW/J%C3%B3lAdniJ%C3%B3?node-id=139%3A758
 *
 */
@Component({
  selector: 'jb-ui-dashboard-layout',
  template: `
    <div class="dashboard-main-layout"
         gdAreas.xs="menu | content | footer"
         gdRows.xs="auto 1fr auto"
         gdColumns.xs="none"

         gdAreas.sm=" menu content | menu footer"
         gdColumns.sm="260px auto"
         gdRows.sm="1fr auto"

         gdRows.gt-sm="1fr auto"
         gdAreas.gt-sm="menu content | menu footer"
         gdColumns.gt-sm="260px auto"
    >
      <div class="box menu dark-theme" gdArea="menu" fxLayout="column">
        <div class="logo"></div>
        <nav class="menu-items" fxFlex="grow">
          <ng-content select="[dashboard-menu]"></ng-content>
        </nav>
        <nav class="menu-items footer">
          <ng-content select="[dashboard-menu-bottom]"></ng-content>
        </nav>
      </div>
      <div class="box content" gdArea="content">
        <ng-content select="[dashboard-content]"></ng-content>
      </div>
      <footer class="box footer" gdArea="footer">
        <ng-content select="[dashboard-footer]"></ng-content>
      </footer>
    </div>
  `,
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent {
}
