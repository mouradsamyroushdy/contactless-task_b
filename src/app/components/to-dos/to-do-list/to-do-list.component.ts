import { Component, OnInit } from "@angular/core";
import { ToDo } from "src/app/models/to-do.model";
import { ToDosService } from "src/app/services/to-dos.service";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"]
})
export class ToDoListComponent implements OnInit {
  public toDos: [ToDo];
  public toDosLoading: boolean = true;

  constructor(
    private toDosService: ToDosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let userId = params.userId;
      if (userId) this.getUserToDoList(userId);
      else this.getToDoList();
    });
  }
  onDeleteClicked(toDo: ToDo) {
    this.toDos.splice(this.toDos.indexOf(toDo), 1);
  }
  getToDoList() {
    this.toDosService.getToDoList().subscribe((toDos: [ToDo]) => {
      this.toDos = toDos;
      this.toDosLoading = false;
    });
  }
  getUserToDoList(userId) {
    this.toDosService.getUserToDoList(userId).subscribe((toDos: [ToDo]) => {
      this.toDos = toDos;
      this.toDosLoading = false;
    });
  }
}
