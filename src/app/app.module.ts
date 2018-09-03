import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
import { HomeComponent } from './home/home.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    MedicinesMenuComponent,
    PageNotFoundComponent,
    NaturalEmergenciesComponent,
    HomeComponent
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
    DatosService,
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
