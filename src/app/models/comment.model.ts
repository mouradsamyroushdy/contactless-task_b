export class Comment {
  constructor(
    public id: number,
    public name: number,
    public body: string,
    public postId: number,
    public email: string
  ) {}
}
