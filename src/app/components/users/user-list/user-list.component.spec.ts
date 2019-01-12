import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UsersService, AppConfig } from 'src/app/services';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfigMock } from 'src/app/mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: AppConfig, useClass: AppConfigMock },
        UsersService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
