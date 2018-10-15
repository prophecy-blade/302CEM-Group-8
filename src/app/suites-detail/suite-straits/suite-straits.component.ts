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
      alt:
        'The Straits Room exudes the hotel elegance and timeless style. Tastefully furnished in art deco style and accented by rich fabrics and materials, each room comes with thoughtful amenities and a beautifully appointed colonial style black and white tiled bathroom. ',
      title: 'Straits'
    });
    this.images.push({
      source: 'assets/images/suites/strait2.jpg',
      alt:
        'The Straits Room exudes the hotel elegance and timeless style. Tastefully furnished in art deco style and accented by rich fabrics and materials, each room comes with thoughtful amenities and a beautifully appointed colonial style black and white tiled bathroom. ',
      title: 'Straits'
    });
  }
}
