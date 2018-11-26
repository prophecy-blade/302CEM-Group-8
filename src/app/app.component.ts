import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel Transylvania';
  display: boolean = false;
  items: MenuItem[];
  adminItems: MenuItem[];

  user_id: String = null;

  constructor(public auth: AuthService) {
    console.log(auth.user);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'The Transylvania',
        icon: 'fas fa-hotel',
        routerLink: ['/home']
      },
      { label: 'Suites', icon: 'fas fa-bed', routerLink: ['/suites'] },
      { label: 'Services', icon: 'fas fa-book', routerLink: ['/services'] },
      { label: 'Account', icon: 'fas fa-user', routerLink: ['/user-account'] },
      { label: 'Contact', icon: 'fas fa-envelope', routerLink: ['/contact'] }
    ];

    this.adminItems = [
      {
        label: 'The Transylvania',
        icon: 'fas fa-hotel',
        routerLink: ['/home']
      },
      {
        label: 'Suites Management',
        icon: 'fas fa-bed',
        routerLink: ['/admin-suites-management']
      },
      {
<<<<<<< HEAD
        label: 'Booking Management',
=======
        label: 'Administration',
>>>>>>> 9259405426a0543af8f7533f7884ccf7ae442e73
        icon: 'fas fa-book',
        routerLink: ['/admin-booking-management']
      },
      { label: 'Account', icon: 'fas fa-user', routerLink: ['/user-account'] },
      { label: 'Contact', icon: 'fas fa-envelope', routerLink: ['/contact'] }
    ];
<<<<<<< HEAD
=======

    this.frontdeskItems = [
      {
        label: 'The Transylvania',
        icon: 'fas fa-hotel',
        routerLink: ['/home']
      },
      {
        label: 'Room Status',
        icon: 'far fa-calendar-check',
        routerLink: ['/frontdesk-management']
      },
      { label: 'Services', icon: 'fas fa-book', routerLink: ['/services'] },
      { label: 'Account', icon: 'fas fa-user', routerLink: ['/user-account'] },
      { label: 'Contact', icon: 'fas fa-envelope', routerLink: ['/contact'] }
    ];
>>>>>>> 9259405426a0543af8f7533f7884ccf7ae442e73
  }

  showDialog() {
    this.display = true;
  }
}
