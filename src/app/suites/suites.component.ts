import { Component, OnInit } from '@angular/core';

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
})
export class SuitesComponent implements OnInit {
  constructor() {}

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
}
