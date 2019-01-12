import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatProgressSpinnerModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatCheckboxModule,
  MatTooltipModule
} from '@angular/material';

import { AlbumDetailsComponent } from './components/albums/album-details/album-details.component';
import { AlbumListComponent } from './components/albums/album-list/album-list.component';
import { AppComponent } from './app.component';
import { AppConfig } from './services/app-config.service';
import { AppConfiguration } from './models/app-configuration';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { ToDoListComponent } from './components/to-dos/to-do-list/to-do-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AlbumDetailsComponent,
    AlbumListComponent,
    AppComponent,
    PageNotFoundComponent,
    PostListComponent,
    ToDoListComponent,
    UserListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: (appConfig: AppConfig) => {
        return () => appConfig.load();
      },
      deps: [AppConfig],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
