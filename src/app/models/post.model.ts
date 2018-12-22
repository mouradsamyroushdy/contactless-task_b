import { Comment } from "../models/index";

export class Post {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public body: string,
    public comments: [Comment],
    public showComments: boolean
  ) {}
}
