import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  formValidationErrors:boolean

  todo?:Todo

  constructor(private route:ActivatedRoute,private todoservice:TodoService,private routerURL:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{   // get current id and observe it
      let todoId = params.get('id')
      this.todo = this.todoservice.getTodo(todoId)
    })
  }

  onFormSubmit(form:NgForm){
    this.todoservice.updateTodo(this.todo?.id, form.value)  // update current todo
    this.routerURL.navigateByUrl('/todos')
  }
}
