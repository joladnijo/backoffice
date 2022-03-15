import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [
    DashboardLayoutComponent
  ],
  exports: [
    DashboardLayoutComponent
  ]
})
export class UiModule {}
