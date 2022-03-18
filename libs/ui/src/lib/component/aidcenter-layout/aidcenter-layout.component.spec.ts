import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidcenterLayoutComponent } from './aidcenter-layout.component';

describe('AidcenterLayoutComponent', () => {
  let component: AidcenterLayoutComponent;
  let fixture: ComponentFixture<AidcenterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AidcenterLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AidcenterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
