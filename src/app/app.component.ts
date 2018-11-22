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
  frontdeskItems: MenuItem[];

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
        label: 'Administration',
        icon: 'fas fa-book',
        routerLink: ['/admin-booking-management']
      },
      { label: 'Account', icon: 'fas fa-user', routerLink: ['/user-account'] },
      { label: 'Contact', icon: 'fas fa-envelope', routerLink: ['/contact'] }
    ];

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
  }

  showDialog() {
    this.display = true;
  }
}
