import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListComponent } from './album-list.component';
import { AlbumsService } from 'src/app/services';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('AlbumsComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumListComponent],
      imports: [RouterTestingModule],
      providers: [AlbumsService],
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
