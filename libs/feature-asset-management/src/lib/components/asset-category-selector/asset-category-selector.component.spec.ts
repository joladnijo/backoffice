import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCategorySelectorComponent } from './asset-category-selector.component';
import { AssetServiceMock } from '../../services/asset.service.mock';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AssetCategorySelectorComponent', () => {
  let component: AssetCategorySelectorComponent;
  let fixture: ComponentFixture<AssetCategorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule
      ],
      declarations: [AssetCategorySelectorComponent],
      providers: [AssetServiceMock]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
