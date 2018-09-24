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
      source: 'assets/images/suites/room21.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });
    this.images.push({
      source: 'assets/images/suites/room22.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });
  }
}
