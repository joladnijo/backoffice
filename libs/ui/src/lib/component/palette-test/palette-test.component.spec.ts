import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteTestComponent } from './palette-test.component';

describe('PaletteTestComponent', () => {
  let component: PaletteTestComponent;
  let fixture: ComponentFixture<PaletteTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaletteTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
