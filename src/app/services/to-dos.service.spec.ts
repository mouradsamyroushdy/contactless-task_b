import { TestBed } from '@angular/core/testing';

import { ToDosService } from './to-dos.service';
import { AppConfig } from './app-config.service';
import { AppConfigMock } from '../mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationInitStatus } from '@angular/core';
import { settings } from 'cluster';

describe('ToDosService', () => {
  let toDosService: ToDosService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [{ provide: AppConfig, useClass: AppConfigMock }, ToDosService]
    });
    toDosService = TestBed.get(ToDosService);
  });
  it('should be created', () => {
    expect(toDosService).toBeTruthy();
  });
});
