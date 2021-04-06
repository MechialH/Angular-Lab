import { Component, OnInit } from '@angular/core';
import {Todo} from "src/app/todo"
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  index: number | null = null
  searchText: string| null = null
  addedTodo: string| null =null
  tasks: Todo[] | null = null
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.tasks = this.data.getTodos()
  }

  onRemove(event:any){
    this.data.deleteTodo(event)

  }
  addTask(){
    this.data.addTodo(this.addedTodo)
    this.addedTodo = null
  }

}
