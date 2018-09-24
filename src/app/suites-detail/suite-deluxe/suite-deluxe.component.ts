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
      source: 'assets/images/suites/room1.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });
    this.images.push({
      source: 'assets/images/suites/room2.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });
  }
}
