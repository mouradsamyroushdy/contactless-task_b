import { Injectable } from "@angular/core";
import { Event as NavigationEvent, RouterEvent } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class Logger {
  log(id: any, url: any): any {
    throw new Error("Method not implemented.");
  }
  logNavigationEvent(e: NavigationEvent): any {
    console.log(e);
  }
  constructor() {}
}
