import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { DatosService } from './datos.service';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MedicinesMenuComponent } from './medicines-menu/medicines-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NaturalEmergenciesComponent } from './natural-emergencies/natural-emergencies.component';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    MedicinesMenuComponent,
    PageNotFoundComponent,
    NaturalEmergenciesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgbModule.forRoot()
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
