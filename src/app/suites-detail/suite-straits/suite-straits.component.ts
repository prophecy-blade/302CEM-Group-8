import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-straits',
  templateUrl: './suite-straits.component.html',
  styleUrls: ['./suite-straits.component.css']
})
export class SuiteStraitsComponent implements OnInit {
  images: any[];
  constructor() {}

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/suites/strait1.jpg',
      alt: 'Description for Image 1',
      title: 'Straits'
    });
    this.images.push({
      source: 'assets/images/suites/strait2.jpg',
      alt: 'Description for Image 1',
      title: 'Straits'
    });
  }
}
