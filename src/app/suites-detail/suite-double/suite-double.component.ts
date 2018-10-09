import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-double',
  templateUrl: './suite-double.component.html',
  styleUrls: ['./suite-double.component.css']
})
export class SuiteDoubleComponent implements OnInit {
  images: any[];

  constructor() {}

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/suites/double1.jpg',
      alt: 'Description for Image 1',
      title: 'Double Room'
    });
    this.images.push({
      source: 'assets/images/suites/double2.jpg',
      alt: 'Description for Image 1',
      title: 'Double Room'
    });
  }
}
