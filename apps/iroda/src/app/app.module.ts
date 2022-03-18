import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@joladnijo-backoffice/ui';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }),
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    MatFormFieldModule,
    MatSelectModule,
    FontAwesomeModule,
    MatTabsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
