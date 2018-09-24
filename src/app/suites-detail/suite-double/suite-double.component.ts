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
      source: 'assets/images/suites/room13.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });
    this.images.push({
      source: 'assets/images/suites/room12.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });
  }
}
