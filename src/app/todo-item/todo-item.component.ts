import { Component, Input, OnInit } from '@angular/core';
import {Todo} from 'src/app/todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() task:Todo | null = null
  constructor() { }

  ngOnInit(): void {
  }

}
