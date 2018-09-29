import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel Transylvania';

  items: MenuItem[];

  user_id: String = null;

  constructor(public auth: AuthService) {
    console.log(auth.user);
  }

  ngOnInit() {
    this.items = [
      { label: 'The Transylvania', icon: 'fas fa-moon', routerLink: ['/home'] },
      { label: 'Suites', icon: 'fas fa-bed', routerLink: ['/suites'] },
      { label: 'Services', icon: 'fas fa-book' },
      { label: 'Account', icon: 'fas fa-dollar-sign' },
      { label: 'Contact', icon: 'fas fa-envelope' }
    ];
  }
}
