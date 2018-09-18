import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuitesComponent } from './suites/suites.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //empty path means when no path from the url, then straightaway redirect to-
  { path: 'home', component: HomeComponent },
  { path: 'suites', component: SuitesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
