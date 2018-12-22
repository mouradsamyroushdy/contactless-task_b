import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { User } from "src/app/models/index";
import { UsersService } from "src/app/services";

@Component({
  selector: "app-users",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  public users: [User];
  public usersLoading: boolean = true;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.usersService.getUserList().subscribe((users: [User]) => {
      this.users = users;
      this.usersLoading = false;
    });
  }
  onShowDetailsClicked(user: User) {
    this.router.navigate(["/users", user.id]);
  }
  onDeleteClicked(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
  onPostsClicked(user: User) {
    this.router.navigate(["/posts"], { queryParams: { userId: user.id } });
  }
  onAlbumsClicked(user: User) {
    this.router.navigate(["/albums"], { queryParams: { userId: user.id } });
  }
  onToDosClicked(user: User) {
    this.router.navigate(["/todos"], { queryParams: { userId: user.id } });
  }
}
