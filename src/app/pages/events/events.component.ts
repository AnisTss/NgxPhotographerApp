import { PageComponent } from './../page/page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent extends PageComponent implements OnInit {

  name = 'EVENTS';
  coupDesc = '8\u00E8me manche cup de tunisie VTT 09 decembre 2018 Jendouba .Fernana,fwazia Vid\u00E9o r\u00E9alis\u00E9 par Waheb Chargui';
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
