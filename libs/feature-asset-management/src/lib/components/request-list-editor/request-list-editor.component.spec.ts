import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListEditorComponent } from './request-list-editor.component';

describe('RequestListEditorComponent', () => {
  let component: RequestListEditorComponent;
  let fixture: ComponentFixture<RequestListEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestListEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
