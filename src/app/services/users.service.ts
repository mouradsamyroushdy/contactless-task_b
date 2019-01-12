import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { AppConfig } from './app-config.service';
import { Observable } from 'rxjs';
import { tryParse } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endpoint: string;
  constructor(private http: HttpClient, private appConfig: AppConfig) {
    this.endpoint = appConfig.getSettings().apiServer.endpoint;
  }

  getUserList(): Observable<[User]> {
    return this.http.get<[User]>(`${this.endpoint}users`);
  }
  getUserDetails(userId: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}users/${userId}`);
  }
}
