import { PageComponent } from './../page/page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends PageComponent implements OnInit {

  name = 'ABOUT';
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
