import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-photos-dashboard',
  templateUrl: './photos-dashboard.component.html',
  styleUrls: ['./photos-dashboard.component.scss']
})

/**
 * This components is just for demo purposes it is Work In Progress
 * The photo container should be a seperate component
 * The toolbar should be also a seperate component that must be floating
 */
export class PhotosDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  photoCollection = [
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/1.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/2.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/3.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/4.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/5.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/1.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/2.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/3.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/4.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/5.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/1.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/2.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/3.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/4.jpg'
    },
    {
      title: '',
      link: 'http://www.gstatic.com/webp/gallery/5.jpg'
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) { }
}
