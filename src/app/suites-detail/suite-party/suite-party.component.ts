import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-party',
  templateUrl: './suite-party.component.html',
  styleUrls: ['./suite-party.component.css']
})
export class SuitePartyComponent implements OnInit {
  images: any[];
  constructor() {}

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/images/suites/family1.jpg',
      alt: 'Description for Image 1',
      title: 'Party Room'
    });
    this.images.push({
      source: 'assets/images/suites/family2.jpg',
      alt: 'Description for Image 1',
      title: 'Party Room'
    });
  }
}
