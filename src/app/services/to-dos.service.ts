import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AppConfig } from "./app-config.service";
import { Observable } from "rxjs";
import { ToDo } from "../models/to-do.model";

@Injectable({ providedIn: "root" })
export class ToDosService {
  private endpoint: string = AppConfig.settings.apiServer.endpoint;
  constructor(private http: HttpClient) {}

  getToDoList(): Observable<[ToDo]> {
    return this.http.get<[ToDo]>(`${this.endpoint}todos`);
  }
  getUserToDoList(userId): Observable<[ToDo]> {
    return this.http.get<[ToDo]>(`${this.endpoint}todos?userId=${userId}`);
  }
}
