import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppConfig } from './app-config.service';

describe('AppConfigService', () => {
  let appConfigService: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    appConfigService = TestBed.get(AppConfig);
  });

  it('should be created', () => {
    expect(appConfigService).toBeTruthy();
  });

  it('should has "settings" object', () => {
    appConfigService.load().then(() => {
      expect(AppConfig.settings).toBeTruthy();
    });
  });
});
