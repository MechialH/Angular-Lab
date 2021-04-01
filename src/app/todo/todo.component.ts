import { Component, OnInit } from '@angular/core';
import {Todo} from "src/app/todo"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tasks:Todo[]=[
  {completed: false,
  task: "practice angular"},
  {completed: false,
    task: 'research unity'},
    {completed: true,
      task: "check linkedIn"},
      {completed: false,
        task: "job search"},
        {completed: true,
          task: "reply to slack"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
