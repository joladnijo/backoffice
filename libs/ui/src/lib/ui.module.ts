import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FootMenulistComponent } from './component/foot-menulist/foot-menulist.component';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AidcenterLayoutComponent } from './component/aidcenter-layout/aidcenter-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, RouterModule, MatTooltipModule, FontAwesomeModule, MatFormFieldModule, MatSelectModule],
  declarations: [
    DashboardLayoutComponent,
    FootMenulistComponent,
    AidcenterLayoutComponent
  ],
  exports: [
    DashboardLayoutComponent,
    FootMenulistComponent,
    AidcenterLayoutComponent
  ]
})
export class UiModule {}
