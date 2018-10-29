import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  @Input()
  title: string = '';

  constructor() { }

  ngOnInit() {
  }

}
