import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = []

  constructor() { 
    this.loadState()

    // get trees form event 
    //fromEvent(window, "storage").subscribe((event: StorageEvent) => {  require solve error
      //
    //})
  }

  
  // method to get all notes
  getNotes(){
    return this.notes
  }


  // method to return specific note
  getNote(id:any){
    // return true when n.id === id passed into this method
   return this.notes.find(n => {return n.id === id} )
  }


  // method to add a new note
  addNote(note:Note){
    this.notes.push(note); // we use push() because Note is an array
    this.saveState()
  }


  // method to updateNote
  updateNote(id:any, updateFields:Partial<Note>){ // I am gonna search about (partial)
    // first : get specific note that will update
    const note = this.getNote(id)
    // second: use object assign to update this note
    Object.assign(note,updateFields)
    this.saveState()
  }


  // method to delete note 
  deleteNote(id:any){
    // find specific note that you delete
    const noteIndex = this.notes.findIndex(n => {
      return n.id === id
    })
    // if noteIndex do not found do not run
    if (noteIndex == -1 ){
      return
    }
    // delete note
    this.notes.splice(noteIndex,1)
    this.saveState()
  }

  // create saveState for localStorage
  saveState(){
    let StringData = JSON.stringify(this.notes) // use stringify to save as string
    localStorage.setItem("notes", StringData) 
  
  }
  // create LoadState to and but in in the constructor


  loadState(){
      let getData = localStorage.getItem("notes") 

      const noteInLocalStorage = JSON.parse(getData || '{}') // return Data to JS object
  
      if(!noteInLocalStorage) return
  
      this.notes.length = 0
      
      this.notes.push(...noteInLocalStorage)
  

  }

}
