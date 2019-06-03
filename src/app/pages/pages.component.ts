import { Component, OnInit, ViewChild, AfterViewInit, ContentChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavbarItem } from '../components/navbar/navbar-item';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  navigationItems: NavbarItem[] = [
    {
      name: 'Home',
      routerLink: 'home'
    },
    {
      name: 'Events',
      routerLink: 'events'
    },
    {
      name: 'Portraits',
      routerLink: 'portraits'
    },
    {
      name: 'Documentary',
      routerLink: 'documentary'
    },
    {
      name: 'Fiction',
      routerLink: 'fiction'
    },
    {
      name: 'Clients',
      routerLink: 'clients'
    },
    {
      name: 'Bio',
      routerLink: 'about'
    },
    {
      name: 'Contact',
      routerLink: 'contact'
    }
  ];

  currentPageTitle: string = '';
  sidebarOpened = true;
  constructor(public breakpointObserver: BreakpointObserver) {

    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      console.log('Breakpoint: ', result);
      if (result.matches) {
        this.sidebarOpened = false;
      } else {
        this.sidebarOpened = true;
      }
    });
  }

  ngOnInit() {
  }

  onActivate($event) {
    this.currentPageTitle = $event.name;
  }

}
