import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./components/users/user-list/user-list.component";
import { PostListComponent } from "./components/posts/post-list/post-list.component";
import { AlbumListComponent } from "./components/albums/album-list/album-list.component";
import { AlbumDetailsComponent } from "./components/albums/album-details/album-details.component";
import { ToDoListComponent } from "./components/to-dos/to-do-list/to-do-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "users", component: UserListComponent, data: { title: "Users" } },
  { path: "posts", component: PostListComponent, data: { title: "Posts" } },
  { path: "albums", component: AlbumListComponent, data: { title: "Albums" } },
  {
    path: "albums/:id",
    component: AlbumDetailsComponent,
    data: { title: "Album" }
  },
  { path: "todos", component: ToDoListComponent, data: { title: "ToDos" } },
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
