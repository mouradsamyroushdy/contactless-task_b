import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "src/app/services";
import { AlbumPhoto, Album } from "src/app/models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.scss"]
})
export class AlbumDetailsComponent implements OnInit {
  public photos: [AlbumPhoto];
  public album: Album;
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let albumId = params.id;
      this.getAlbumDetails(albumId);
      this.getAlbumPhotos(albumId);
    });
  }
  getAlbumPhotos(albumId: number) {
    this.albumsService
      .getAlbumPhotos(albumId)
      .subscribe((photos: [AlbumPhoto]) => {
        this.photos = photos;
      });
  }
  getAlbumDetails(albumId: number) {
    this.albumsService.getAlbumDetails(albumId).subscribe((album: Album) => {
      this.album = album;
    });
  }
}
