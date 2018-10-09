import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-single',
  templateUrl: './suite-single.component.html',
  styleUrls: ['./suite-single.component.css']
})
export class SuiteSingleComponent implements OnInit {
  images: any[];

  constructor() {}

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/suites/single1.jpg',
      alt: 'Description for Image 1',
      title: 'Single Room'
    });
    this.images.push({
      source: 'assets/images/suites/single2.jpg',
      alt: 'Description for Image 1',
      title: 'Single Room'
    });
  }
}
