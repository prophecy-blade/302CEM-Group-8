import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrls = [
    {
      url: 'assets/images/intro/intro.jpg',
      caption: 'The View'
    },
    {
      url: 'assets/images/intro/intro.banquet-buffet.jpg',
      caption: 'The Banquet'
    },
    {
      url: 'assets/images/intro/intro.hall.jpg',
      caption: 'The Hall'
    },
    {
      url: 'assets/images/intro/intro.ballroom.jpg',
      caption: 'The Ballroom'
    },
    {
      url: 'assets/images/intro/lobby.jpg',
      caption: 'The Lobby'
    }
    // {
    //   url:
    //     'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg',
    //   clickAction: () => alert('custom click function')
    //   href: 'https://www.apple.com/'
    //   href: '#config'
    // },
  ];

  height: string = '555px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';

  constructor() {}

  ngOnInit() {}
}
