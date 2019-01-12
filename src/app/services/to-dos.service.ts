import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from './app-config.service';
import { AppConfigMock } from '../mocks';
import { Observable } from 'rxjs';
import { ToDo } from '../models/to-do.model';

@Injectable({ providedIn: 'root' })
export class ToDosService {
  private endpoint: string;
  private fun: string;
  constructor(private http: HttpClient, private appConfig: AppConfig) {
    this.endpoint = appConfig.getSettings().apiServer.endpoint;
  }

  getToDoList(): Observable<[ToDo]> {
    return this.http.get<[ToDo]>(`${this.endpoint}todos`);
  }
  getUserToDoList(userId): Observable<[ToDo]> {
    return this.http.get<[ToDo]>(`${this.endpoint}todos?userId=${userId}`);
  }
}
