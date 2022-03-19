import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        RequestListComponent
    ],
    exports: [
        RequestListComponent
    ]
})
export class FeatureAssetManagementModule {}
