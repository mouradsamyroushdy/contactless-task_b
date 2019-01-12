import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { AppConfig } from '.';
import { AppConfigMock } from '../mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PostsService', () => {
  let postsService: PostsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [{ provide: AppConfig, useClass: AppConfigMock }, PostsService]
    });
    postsService = TestBed.get(PostsService);
  });
  it('should be created', () => {
    expect(postsService).toBeTruthy();
  });
});
