import { Component, OnInit } from '@angular/core';
import {Todo} from "src/app/todo"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  index: number | null = null
  searchText: string| null = null
  addedTodo: string| null =null
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

  onRemove(event:any){
    this.tasks.splice(event.index,1)

  }
  addTask(){
    this.tasks.push({completed: false, task: this.addedTodo})
    this.searchText = null
  }

}
