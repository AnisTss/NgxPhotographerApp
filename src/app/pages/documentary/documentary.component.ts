import { PageComponent } from './../page/page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.scss']
})
export class DocumentaryComponent extends PageComponent implements OnInit {

  name = 'DOCUMENTARY';

  tuni88Desc = 'Directed by Waheb Chargui, this documentary tells the story of the first year of Tunisia88.  It begins with founder, pianist Kimball Gallagher telling the story of his last 10 years in Tunisia and continues with President of the association, Action et D\u00E9veloppement Radhi Meddeb and the rest of the Tunisia88 team.  There are many beautiful shots of the Tunisian landscape from all around the country from the tables of Jugurtha to the coast of Haouaria, the mountains of Ain Draham and the desert in Tatouine.  Inspiring and hopeful!';
  workingWomenDesc = '\"Working Women\u2019s Rights under Scrutiny\" est un court documentaire qui porte sur les difficult\u00E9s et la mani\u00E9re de vivre de la femme ouvri\u00E9re dans le domaine de l\'agriculture.';
  constructor() {

    super();
  }

  ngOnInit() {
  }

}
