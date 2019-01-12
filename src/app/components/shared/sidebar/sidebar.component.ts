import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public navigation = [
    { name: 'Users', route: '/users', order: 1 },
    { name: 'Posts', route: '/posts', order: 2 },
    { name: 'Albums', route: '/albums', order: 3 },
    { name: 'ToDos', route: '/todos', order: 4 }
  ];

  constructor() {}

  ngOnInit() {}
}
