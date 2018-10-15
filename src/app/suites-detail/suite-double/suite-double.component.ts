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
      alt:
        'A bigger version of single room which contains double size bed and and the facilities as well are bigger size which are suitable for couple to stay in.',
      title: 'Double Room'
    });
    this.images.push({
      source: 'assets/images/suites/double2.jpg',
      alt:
        'A bigger version of single room which contains double size bed and and the facilities as well are bigger size which are suitable for couple to stay in.',
      title: 'Double Room'
    });
  }
}
