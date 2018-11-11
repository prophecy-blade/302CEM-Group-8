import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../core/auth.service';
// import { Http, Response } from '@angular/http';
// import { DatabaseService } from '../database.service';
// import { database } from 'firebase';

export interface TotalAdults {
  value: number;
  viewValue: number;
}

export interface TotalChildrens {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrls: ['./suites.component.css']
  // providers: [DatabaseService]
})
export class SuitesComponent implements OnInit {
  constructor(public auth: AuthService) {
    console.log(auth.user);
  }
  ngOnInit() {}

  totalAdults: TotalAdults[] = [
    { value: 0, viewValue: 0 },
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 }
  ];

  totalChildrens: TotalChildrens[] = [
    { value: 0, viewValue: 0 },
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 }
  ];

  // getAllRoom() {
  //   this.databaseService
  //     .getBookingRoom()
  //     .then((data: any) => {
  //       if (data) {
  //         console.log(data);
  //       }
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
