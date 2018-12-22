import { Component } from "@angular/core";
import {
  Router,
  RouterEvent,
  Event as NavigationEvent,
  NavigationEnd,
  ActivatedRoute
} from "@angular/router";

import { Logger } from "./services";
import { filter, map, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public title: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: Logger
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        route.firstChild.data.subscribe(data => {
          this.title = data.title;
        });
      }
    });
  }
  showSidebar: boolean = true;
  public navigation = [
    { name: "Users", route: "/users", order: 1 },
    { name: "Posts", route: "/posts", order: 2 },
    { name: "Albums", route: "/albums", order: 3 },
    { name: "ToDos", route: "/todos", order: 4 }
  ];
  onSidebarToggled() {
    this.showSidebar = !this.showSidebar;
  }
}
