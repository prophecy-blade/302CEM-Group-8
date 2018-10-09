import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-deluxe',
  templateUrl: './suite-deluxe.component.html',
  styleUrls: ['./suite-deluxe.component.css']
})
export class SuiteDeluxeComponent implements OnInit {
  images: any[];

  constructor() {}

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/suites/deluxe1.jpg',
      alt: 'Deluxe Room',
      title: 'Deluxe Room'
    });
    this.images.push({
      source: 'assets/images/suites/deluxe2.jpg',
      alt: 'Deluxe Room',
      title: 'Deluxe Room'
    });
  }
}
