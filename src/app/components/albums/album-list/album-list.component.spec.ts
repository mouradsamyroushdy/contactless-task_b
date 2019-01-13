import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlbumListComponent } from './album-list.component';
import { AlbumsService, AppConfig } from 'src/app/services';
import { AppConfigMock } from 'src/app/mocks';

describe('AlbumsComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: AppConfig, useClass: AppConfigMock },
        AlbumsService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
