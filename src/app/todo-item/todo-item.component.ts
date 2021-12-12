import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo 

  @Output() deleteClick: EventEmitter<void> = new EventEmitter()// تستخدم لتمرير معلومات من الطفل للاب ولتحويل الي ايفينت
  @Output() editClick: EventEmitter<void> = new EventEmitter()  // تستخدم لتمرير معلومات من الطفل للاب ولتحويل الي ايفينت

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick(){
    this.editClick.emit()   // emit() to pass data through it if you need
  } 

  onDeleteClick(){
    this.deleteClick.emit()   // emit() to pass data through it if you need
  }
}
