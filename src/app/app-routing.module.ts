import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuitesComponent } from './suites/suites.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { SuitePartyComponent } from './suites-detail/suite-party/suite-party.component';
import { SuiteFamilyComponent } from './suites-detail/suite-family/suite-family.component';
import { SuiteDeluxeComponent } from './suites-detail/suite-deluxe/suite-deluxe.component';
import { SuiteStraitsComponent } from './suites-detail/suite-straits/suite-straits.component';
import { SuiteDoubleComponent } from './suites-detail/suite-double/suite-double.component';
import { SuiteSingleComponent } from './suites-detail/suite-single/suite-single.component';
import { UserInfoComponent } from './account-detail/user-info/user-info.component';
import { UserBookingComponent } from './account-detail/user-booking/user-booking.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AdminBookingManagementComponent } from './admin-booking-management/admin-booking-management.component';
import { AdminSuitesManagementComponent } from './admin-suites-management/admin-suites-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //empty path means when no path from the url, then straightaway redirect to-
  { path: 'home', component: HomeComponent },
  {
    path: 'suites',
    component: SuitesComponent,
    children: [
      { path: '', redirectTo: 'suite-single', pathMatch: 'full' },
      { path: 'suite-party', component: SuitePartyComponent },
      { path: 'suite-deluxe', component: SuiteDeluxeComponent },
      { path: 'suite-family', component: SuiteFamilyComponent },
      { path: 'suite-straits', component: SuiteStraitsComponent },
      { path: 'suite-double', component: SuiteDoubleComponent },
      { path: 'suite-single', component: SuiteSingleComponent }
    ]
  },
  {
    path: 'user-account',
    component: UserAccountComponent,
    children: [
      { path: '', redirectTo: 'user-info', pathMatch: 'full' },
      { path: 'user-info', component: UserInfoComponent },
      { path: 'user-booking', component: UserBookingComponent }
    ]
  },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'admin-booking-management',
    component: AdminBookingManagementComponent
  },
  { path: 'admin-suites-management', component: AdminSuitesManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
