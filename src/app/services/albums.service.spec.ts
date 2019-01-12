import { TestBed } from '@angular/core/testing';

import { AlbumsService } from './albums.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from '.';
import { AppConfigMock } from '../mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumsService', () => {
  let albumsService: AlbumsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AppConfig, useClass: AppConfigMock },
        AlbumsService
      ]
    });
    albumsService = TestBed.get(AlbumsService);
  });
  it('should be created', () => {
    expect(albumsService).toBeTruthy();
  });
});
