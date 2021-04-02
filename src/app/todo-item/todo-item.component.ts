import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import {Todo} from 'src/app/todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() task:Todo | null = null
  @Output() removed = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  
  removeTask(){
    this.removed.emit(this.task)
   }

  completeTask(){
    this.task.completed = true
  }
}
