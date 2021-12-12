import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  formValidationErrors: boolean // use it to make a condition to show a message(please enter a note title) 

  constructor(private noteService:NoteService,private router:Router) { }

  ngOnInit(): void {
  }

  // adding new note
  onFormSubmit(form: NgForm){

    if (form.invalid) return this.formValidationErrors = true

    const note = new Note(form.value.title, form.value.content) // fitch data dynamic from the form
    this.noteService.addNote(note) // using method from noteService
    this.router.navigateByUrl('/notes') // to remove a popup of adding notes
  }

}
