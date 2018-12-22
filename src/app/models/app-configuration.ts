export class EnvAppConfig {
  constructor(public name: string) {}
}
export class AppInsightsAppConfig {
  constructor(public instrumentationKey: string) {}
}
export class LoggingAppConfig {
  constructor(public console: boolean, public appInsights: boolean) {}
}
export class ApiServerAppConfig {
  constructor(
    public endpoint: string,
    public metadata: string,
    public rules: string
  ) {}
}
export class AppConfiguration {
  constructor(
    public env: EnvAppConfig,
    public appInsights: AppInsightsAppConfig,
    public logging: LoggingAppConfig,
    public apiServer: ApiServerAppConfig
  ) {}
}
