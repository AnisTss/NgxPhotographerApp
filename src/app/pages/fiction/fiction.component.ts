import { PageComponent } from './../page/page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class FictionComponent extends PageComponent implements OnInit {

  name = 'FICTION';
  flashbackDesc = 'Le court-m\u00E9trage  \" flashback  \" raconte l\'histoire d\'un jeune homme \u00E2g\u00E9 de 23 ans . \r\nCe jeune homme , appel\u00E9 Seif , se trouve accabl\u00E9 par des conditions d\u00E9favorables  qui l\' \u00E9garent . \r\nIl est \u00E9pris par la guitare , Seif sera rejet\u00E9 par l\'institution culturelle pour qu\'il soit accueilli par le fl\u00E9au terroriste';
  
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
