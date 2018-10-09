import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { TabMenuModule } from 'primeng/tabmenu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { MatCardModule } from '@angular/material/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { HomeComponent } from './home/home.component';
import { SuitesComponent } from './suites/suites.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SuitesDetailComponent } from './suites-detail/suites-detail.component';
import { SuitePartyComponent } from './suites-detail/suite-party/suite-party.component';
import { SuiteFamilyComponent } from './suites-detail/suite-family/suite-family.component';
import { SuiteDeluxeComponent } from './suites-detail/suite-deluxe/suite-deluxe.component';
import { SuiteStraitsComponent } from './suites-detail/suite-straits/suite-straits.component';
import { SuiteDoubleComponent } from './suites-detail/suite-double/suite-double.component';
import { SuiteSingleComponent } from './suites-detail/suite-single/suite-single.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { UserInfoComponent } from './account-detail/user-info/user-info.component';
import { UserBookingComponent } from './account-detail/user-booking/user-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuitesComponent,
    UserAccountComponent,
    ContactComponent,
    ServicesComponent,
    SuitesDetailComponent,
    SuitePartyComponent,
    SuiteFamilyComponent,
    SuiteDeluxeComponent,
    SuiteStraitsComponent,
    SuiteDoubleComponent,
    SuiteSingleComponent,
    AccountDetailComponent,
    UserInfoComponent,
    UserBookingComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    SlideshowModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    DialogModule,
    ButtonModule,
    CarouselModule,
    GalleriaModule,
    MatCardModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBr71V5ZUPDcx6CusFJWPZ52gwRa8DlgSA',
      authDomain: 'tclowdemo.firebaseapp.com',
      databaseURL: 'https://tclowdemo.firebaseio.com',
      projectId: 'tclowdemo'
    }),
    
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
