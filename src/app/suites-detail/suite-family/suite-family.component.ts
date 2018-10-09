import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-family',
  templateUrl: './suite-family.component.html',
  styleUrls: ['./suite-family.component.css']
})
export class SuiteFamilyComponent implements OnInit {
  images: any[];
  constructor() {}

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/suites/family1.jpg',
      alt: 'Description for Image 1',
      title: 'Family Room'
    });
    this.images.push({
      source: 'assets/images/suites/family2.jpg',
      alt: 'Description for Image 1',
      title: 'Family Room'
    });
  }
}
