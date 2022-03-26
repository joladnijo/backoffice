import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWidgetComponent } from './add-widget.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AssetCategorySelectorComponent } from '../asset-category-selector/asset-category-selector.component';
import { AssetServiceMock } from '../../services/asset.service.mock';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddWidgetComponent', () => {
  let component: AddWidgetComponent;
  let fixture: ComponentFixture<AddWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCardModule
      ],
      declarations: [
        AssetCategorySelectorComponent,
        AddWidgetComponent
      ],
      providers: [
        AssetServiceMock
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
