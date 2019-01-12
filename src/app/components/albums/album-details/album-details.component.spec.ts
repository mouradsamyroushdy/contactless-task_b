import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsComponent } from './album-details.component';
import { AlbumsService, AppConfig } from 'src/app/services';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfigMock } from 'src/app/mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumDetailsComponent', () => {
  let component: AlbumDetailsComponent;
  let fixture: ComponentFixture<AlbumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: AppConfig, useClass: AppConfigMock },
        AlbumsService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
