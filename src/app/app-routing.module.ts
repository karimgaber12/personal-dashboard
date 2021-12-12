import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  // notes
  {path:"bookmarks",component:BookmarksComponent},
  {path:"notes",component:NotesComponent}, 
  {path:"notes/add",component:AddNoteComponent},
  {path:"notes/:id",component:EditNoteComponent}, //(notes/:id) it will be a root parameter

  // todo
  {path:"todos",component:TodosComponent},
  {path:"todos/add",component:AddTodoComponent},
  {path:"todos/:id",component:EditTodoComponent}, //(notes/:id) it will be a root parameter
  
  //bookmark
  {path:"bookmarks/add",component:AddBookmarkComponent},
  {path:"bookmarks/manage",component:ManageBookmarksComponent,children: [   // to make edit-bookmark as a child for manage-bookmark
    {path:":id", component:EditBookmarkComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
