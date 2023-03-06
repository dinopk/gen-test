import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

// Components imports
import { DisplayDataComponent } from './display-data/display-data.component';
import { EditDialogComponent } from './core/dialogs/edit-dialog/edit-dialog.component';
import { DataScreenComponent } from './data-screen/data-screen.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './core/store';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@gent-material';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    EditDialogComponent,
    DataScreenComponent,
    WelcomePageComponent,
    ThanksPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    CoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
