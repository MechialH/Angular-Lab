import { Injectable } from '@angular/core';
import {Todo} from 'src/app/todo'

@Injectable({
  providedIn: 'root'
})
export class DataService {
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

  getTodos() {
    return this.tasks
  }

  addTodo(newTodo: string){
    this.tasks.push({completed: false, task: newTodo})

  }

  deleteTodo(index: number){
    this.tasks.splice(index, 1)
  }
}
