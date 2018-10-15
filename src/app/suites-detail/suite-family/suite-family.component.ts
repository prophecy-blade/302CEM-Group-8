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
      alt:
        'A room which has bigger space for bigger group to use and also has 3 beds which are 1 double size bed and two single size bed, suitable for a group of people or a family.',
      title: 'Family Room'
    });
    this.images.push({
      source: 'assets/images/suites/family2.jpg',
      alt:
        'A room which has bigger space for bigger group to use and also has 3 beds which are 1 double size bed and two single size bed, suitable for a group of people or a family.',
      title: 'Family Room'
    });
  }
}
