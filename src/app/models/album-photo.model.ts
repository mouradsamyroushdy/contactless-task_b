export class AlbumPhoto {
  constructor(
    public id: number,
    public albumId: number,
    public url: string,
    public title: string,
    public thumbnailUrl: string
  ) {}
}
