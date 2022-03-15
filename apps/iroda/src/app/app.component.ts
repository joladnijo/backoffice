import { Component } from '@angular/core';
import { faSquareCaretRight } from '@fortawesome/free-regular-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons/faSquarePlus';

@Component({
  selector: 'jb-app-root',
  template: `
    <jb-ui-dashboard-layout>
      <ng-container dashboard-menu>
        <mat-form-field appearance="outline">
          <mat-select placeholder="Válasszon szervezetet">
            <mat-option></mat-option>
            <mat-option value="1">Szervezet 1</mat-option>
            <mat-option value="2">Szervezet 2</mat-option>
            <mat-option value="3">Szervezet 3</mat-option>
          </mat-select>
        </mat-form-field>
        <hr/>
        <div class="aid-center-list">
          <a class="nav-menu-item">Első gyűjtőpont <fa-icon class="suffix" [icon]="rightIcon"></fa-icon></a>
          <a class="nav-menu-item">Második gyűjtőpont <fa-icon class="suffix" [icon]="rightIcon"></fa-icon></a>
          <a class="nav-menu-item">Harmadik gyűjtőpont <fa-icon class="suffix" [icon]="rightIcon"></fa-icon></a>
          <a class="nav-menu-item">Negyedik gyűjtőpont <fa-icon class="suffix" [icon]="rightIcon"></fa-icon></a>
        </div>
        <hr/>
        <a class="nav-menu-item"><fa-icon class="prefix" [icon]="plusIcon"></fa-icon> Új gyűjtőpont hozzáadása</a>
      </ng-container>
      <ng-container dashboard-menu-bottom>MenyüBottom</ng-container>
      <ng-container dashboard-content>
        <h2>Gyál utcai gyűjtőpont</h2>

        <mat-tab-group>
          <mat-tab label="Általános">

            <div class="container-box">
              <mat-form-field>
                <mat-label>Select an option</mat-label>
                <mat-select>
                  <mat-option value="1">Option 1</mat-option>
                  <mat-option value="2">Option 2</mat-option>
                  <mat-option value="3">Option 3</mat-option>
                </mat-select>
              </mat-form-field>
            </div>

          </mat-tab>
          <mat-tab label="Felhasználók"> Content 2 </mat-tab>
        </mat-tab-group>

      </ng-container>
      <ng-container dashboard-footer>Fúter</ng-container>
    </jb-ui-dashboard-layout>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iroda';
  rightIcon = faSquareCaretRight;
  plusIcon = faSquarePlus;
}
