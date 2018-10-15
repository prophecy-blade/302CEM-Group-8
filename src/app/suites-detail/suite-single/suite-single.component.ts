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
      alt:
        'A smaller room which contains single size bed and smaller size of facilities which are suitable for only one person.',
      title: 'Single Room'
    });
    this.images.push({
      source: 'assets/images/suites/single2.jpg',
      alt:
        'A smaller room which contains single size bed and smaller size of facilities which are suitable for only one person.',
      title: 'Single Room'
    });
  }
}
