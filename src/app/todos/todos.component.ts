import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { todoAnim } from '../todoAnim';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [todoAnim]
})
export class TodosComponent implements OnInit {

  todos:Todo[]

  constructor(private todoservice:TodoService , private router:Router) { }

  ngOnInit(): void {

  this.todos = this.todoservice.getTodos()
  
  }

  completedToggle(todo:Todo){
    this.todoservice.updateTodo(todo.id,{completed: !todo.completed})
  }

  EditingTodo(todo:Todo){

    this.router.navigate(['/todos', todo.id])
    
  }

  deletingTodo(todo:Todo){
    this.todoservice.deleteTodo(todo.id)
  }
}
