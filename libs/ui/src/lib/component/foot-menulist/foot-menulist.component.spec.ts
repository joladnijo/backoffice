import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootMenulistComponent } from './foot-menulist.component';

describe('FootMenulistComponent', () => {
  let component: FootMenulistComponent;
  let fixture: ComponentFixture<FootMenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootMenulistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootMenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
