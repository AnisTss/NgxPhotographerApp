import { PageComponent } from './../page/page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.scss']
})
export class PortraitsComponent extends PageComponent implements OnInit {

  name = 'PORTRAITS';
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
