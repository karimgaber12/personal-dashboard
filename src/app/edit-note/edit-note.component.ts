import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note?:Note

  constructor(private route: ActivatedRoute ,private noteService:NoteService,private router:Router) { }
  ngOnInit(): void {

    // find a particular element with id to make some changes
    this.route.paramMap.subscribe((pram:ParamMap) => {    // paramMap: it is an observable 
      const idParam = pram.get('id')
      this.note = this.noteService.getNote(idParam)
    })

  }

// method to add update note

  onFormSubmit(form:NgForm){
    this.noteService.updateNote(this.note?.id, form.value)
    this.router.navigateByUrl('/notes')

}

  deleteNote(){
    this.noteService.deleteNote(this.note?.id) 
    this.router.navigateByUrl('/notes')

  }

}
