import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetCategorySelectorComponent, RequestListComponent } from './components';
import { ReactiveComponentModule } from '@ngrx/component';
import { AssetServiceMock } from './services/asset.service.mock';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { AddWidgetComponent } from './components/add-widget/add-widget.component';
import { RequestListEditorComponent } from './components/request-list-editor/request-list-editor.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule, ReactiveComponentModule,
    MatInputModule, MatAutocompleteModule, MatFormFieldModule,
    ReactiveFormsModule, MatIconModule, FontAwesomeModule, MatButtonModule, MatCardModule, MatDividerModule
  ],
  declarations: [
    RequestListComponent,
    AssetCategorySelectorComponent,
    AddWidgetComponent,
    RequestListEditorComponent
  ],
  exports: [
    RequestListComponent,
    RequestListEditorComponent
  ],
  providers: [
    AssetServiceMock
  ]
})
export class FeatureAssetManagementModule {
}
