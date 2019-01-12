import { AlbumPhoto } from '../models/index';
export class Album {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public photos: [AlbumPhoto],
    public showPhotos: boolean
  ) {}
}
