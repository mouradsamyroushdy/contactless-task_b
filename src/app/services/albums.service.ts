import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Album, AlbumPhoto } from "../models/index";
import { AppConfig } from "./app-config.service";

@Injectable({ providedIn: "root" })
export class AlbumsService {
  private endpoint: string = AppConfig.settings.apiServer.endpoint;
  constructor(private http: HttpClient) {}

  getAlbumList(): Observable<[Album]> {
    return this.http.get<[Album]>(`${this.endpoint}albums`);
  }
  getUserAlbumList(userId): Observable<[Album]> {
    return this.http.get<[Album]>(`${this.endpoint}albums?userId=${userId}`);
  }
  getAlbumPhotos(albumId): Observable<[AlbumPhoto]> {
    return this.http.get<[AlbumPhoto]>(
      `${this.endpoint}albums/${albumId}/photos`
    );
  }
  getAlbumDetails(albumId): Observable<Album> {
    return this.http.get<Album>(`${this.endpoint}albums/${albumId}`);
  }
}
