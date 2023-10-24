import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo = {
    slNo: 0,
    title: '',
    desc: '',
    active: false,
  };

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() markTodo: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    //delete the todo-item
    this.deleteTodo.emit(todo);
  }

  onCompleteClick(todo: Todo) {
    this.markTodo.emit(todo);
  }
}
