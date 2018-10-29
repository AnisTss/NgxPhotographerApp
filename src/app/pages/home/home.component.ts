import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imgs: string[] = [
    'https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/40752520_1278129135657628_6721897738369236992_n.jpg?_nc_cat=104&_nc_ht=scontent.ftun3-1.fna&oh=8155cd28ea42c31b4ca7aa9c6b30cd6c&oe=5C861E0C',
    'https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/10999804_985526851467017_8538155245056306599_n.jpg?_nc_cat=111&_nc_ht=scontent.ftun3-1.fna&oh=81f87def8e5ebdd1d86f2642f7c1d3ae&oe=5C874CEB',
    'https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/22196429_1652917284727967_8914488158555764200_n.jpg?_nc_cat=106&_nc_ht=scontent.ftun3-1.fna&oh=2a97d743166bd4e31b9a20fc4d9e83df&oe=5C886E6D'
  ];

  constructor() { }

  ngOnInit() {
  }

}
