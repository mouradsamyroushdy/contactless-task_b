import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AppConfiguration } from "../models/app-configuration";
@Injectable({
  providedIn: "root"
})
export class AppConfig {
  static settings: AppConfiguration;
  constructor(private http: HttpClient) {}
  load() {
    const commonConfig = `assets/config/config.json`;
    const envConfig = `assets/config/config.${environment.name}.json`;
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(envConfig)
        .toPromise()
        .then((response: AppConfiguration) => {
          AppConfig.settings = <AppConfiguration>response;
          resolve();
        })
        .catch((response: any) => {
          reject(
            `Could not load file '${envConfig}': ${JSON.stringify(response)}`
          );
        });
    });
  }
}
