import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from '.';
import { AppConfigMock } from '../mocks';

describe('UsersService', () => {
  let usersService: UsersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [{ provide: AppConfig, useClass: AppConfigMock }, UsersService]
    });
    usersService = TestBed.get(UsersService);
  });
  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });
});
