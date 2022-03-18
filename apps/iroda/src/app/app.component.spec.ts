import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UiModule } from '@joladnijo-backoffice/ui';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        UiModule,
        RouterTestingModule.withRoutes(
          [{
            path: "**",
            component: AppComponent
          }]
        ),
        MatFormFieldModule,
        MatTabsModule,
        MatSelectModule,
        FontAwesomeTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have foot menu items'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.footMenuItems.length > 0).toBeTruthy();
  });

  it('should render menu logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.logo')).not.toBe(null);
  });
});
