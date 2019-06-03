import { PageComponent } from './../page/page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends PageComponent implements  OnInit {

  name = 'CONTACT US';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
