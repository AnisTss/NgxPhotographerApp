import { Component, OnInit, Input } from '@angular/core';
import { NavbarItem } from './navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  items: NavbarItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
