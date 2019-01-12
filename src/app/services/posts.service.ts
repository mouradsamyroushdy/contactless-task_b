import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Post, Comment } from '../models/index';
import { AppConfig } from './app-config.service';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private endpoint: string;
  constructor(private http: HttpClient, private appConfig: AppConfig) {
    this.endpoint = appConfig.getSettings().apiServer.endpoint;
  }
  getPostList(): Observable<[Post]> {
    return this.http.get<[Post]>(`${this.endpoint}posts`);
  }
  getUserPostList(userId: number): Observable<[Post]> {
    return this.http.get<[Post]>(`${this.endpoint}posts?userId=${userId}`);
  }
  getUserPosts(userId): Observable<[Post]> {
    if (!userId) {
      return of(null);
    }
    return this.http.get<[Post]>(`${this.endpoint}posts/?userId=${userId}`);
  }
  getPostComments(postId): Observable<[Comment]> {
    if (!postId) {
      return of(null);
    }
    return this.http.get<[Comment]>(`${this.endpoint}posts/${postId}/comments`);
  }
}
