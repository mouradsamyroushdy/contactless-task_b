import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import * as _ from "lodash";

import { Post, Comment } from "src/app/models/index";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  public posts: [Post];
  public postsLoading: boolean = true;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let userId = params.userId;
      if (userId) this.getUserPostList(userId);
      else this.getPostList();
    });
  }
  onShowCommentsClicked(post: Post) {
    if (post && post.showComments) {
      post.showComments = false;
      return;
    }
    this.postsService
      .getPostComments(post.id)
      .subscribe((comments: [Comment]) => {
        post.comments = comments;
        post.showComments = true;
      });
  }
  onDeletePostClicked(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }
  onDeleteCommentClicked(post: Post, comment: Comment) {
    post.comments.splice(post.comments.indexOf(comment), 1);
  }
  getPostList(): void {
    this.postsService.getPostList().subscribe((posts: [Post]) => {
      this.posts = posts;
      this.postsLoading = false;
    });
  }
  getUserPostList(userId) {
    this.postsService.getUserPostList(userId).subscribe((posts: [Post]) => {
      this.posts = posts;
      this.postsLoading = false;
    });
  }
}
