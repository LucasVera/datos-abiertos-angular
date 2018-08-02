import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicinesMenuComponent } from './medicines-menu/medicines-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NaturalEmergenciesComponent } from './natural-emergencies/natural-emergencies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'medicines', component: MedicinesMenuComponent },
  { path: 'emergencies', component: NaturalEmergenciesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
