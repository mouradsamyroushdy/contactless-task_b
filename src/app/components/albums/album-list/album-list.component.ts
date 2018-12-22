import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Album, AlbumPhoto } from "src/app/models/index";
import { AlbumsService } from "src/app/services/albums.service";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.scss"]
})
export class AlbumListComponent implements OnInit {
  public albums: [Album];
  public albumsLoading: boolean = true;

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let userId = params.userId;
      if (userId) this.getUserAlbumsList(userId);
      else this.getAlbumList();
    });
  }
  onShowDetailsClicked(album: Album) {
    this.router.navigate(["/albums", album.id]);
  }
  onShowPhotosClicked(album: Album) {
    if (album && album.showPhotos) {
      album.showPhotos = false;
      return;
    }
    this.albumsService
      .getAlbumPhotos(album.id)
      .subscribe((photos: [AlbumPhoto]) => {
        album.photos = photos;
        album.showPhotos = true;
      });
  }
  onDeleteAlbumClicked(album: Album) {
    this.albums.splice(this.albums.indexOf(album), 1);
  }
  getAlbumList() {
    this.albumsService.getAlbumList().subscribe((albums: [Album]) => {
      this.albums = albums;
      this.albumsLoading = false;
    });
  }
  getUserAlbumsList(userId) {
    this.albumsService.getUserAlbumList(userId).subscribe((albums: [Album]) => {
      this.albums = albums;
      this.albumsLoading = false;
    });
  }
}
