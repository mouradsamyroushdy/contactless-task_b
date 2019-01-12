import { Injectable } from '@angular/core';

import { AppConfiguration } from '../models';

@Injectable()
export class AppConfigMock {
  static settings: AppConfiguration = {
    apiServer: {
      endpoint: 'mock',
      metadata: 'mock',
      rules: ''
    },
    appInsights: {
      instrumentationKey: ''
    },
    env: {
      name: ''
    },
    logging: {
      appInsights: false,
      console: false
    }
  };
  getSettings(): AppConfiguration {
    return AppConfigMock.settings;
  }
}
