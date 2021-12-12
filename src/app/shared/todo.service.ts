import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[] = [] // property

  constructor() {
    this.loadState()
   }

  // method to get all notes
  getTodos(){
    return this.todos
  }

  // method to get specific todo
  getTodo(id:any){
    return this.todos.find(todo => todo.id === id)
  }

  // method to add new todo
  addTodo(todo:Todo){
    this.todos.push(todo)
    this.saveState()

  }

  // method to updateTodo
  updateTodo(id:any , updateFields:Partial<Todo>){
    // first : get specific note that will update
    const todo = this.getTodo(id)
    // second: use object assign to update this note
    Object.assign(todo,updateFields)
    this.saveState()

  }

  // method to delete todo
  deleteTodo(id:string){
    // find specific todo that you delete
    const todoIndex = this.todos.findIndex(todo => {
      return todo.id === id
    })
    // if todoIndex do not found do not run
    if (todoIndex == -1) {
      return
    }
    // delete todo
    this.todos.splice(todoIndex,1)
    this.saveState()
  }


    // create saveState for localStorage
    saveState(){
      
      localStorage.setItem("todos", JSON.stringify(this.todos))  // use stringify to save as string
    
    }
    // create LoadState to and but in in the constructor
    loadState(){

      const TodoInLocalStorage = JSON.parse(localStorage.getItem("todos") || '{}') // return Data to JS object
  
      if(!TodoInLocalStorage) return
  
      this.todos.length = 0
      
      this.todos.push(...TodoInLocalStorage)
  

  }

  
}

