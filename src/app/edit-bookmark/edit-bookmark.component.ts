import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {
  bookmark?:Bookmark

  constructor(private bookmarkService:BookmarkService,private router:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    // get specific bookmark with id
    this.router.paramMap.subscribe((param:ParamMap)=>{
      const IdBookmark = param.get('id')
     this.bookmark = this.bookmarkService.getBookmark(IdBookmark)
    
    })
  }

  onFormSubmit(form:NgForm){
    const { name , url} = form.value
    this.bookmarkService.updateBookmark(this.bookmark?.id, {
      name,
      url: new URL(url) // use this object to solve showing icon of website
    })
    this.Router.navigateByUrl('/bookmarks')
  }

  delete(){
    this.bookmarkService.deleteBookmark(this.bookmark?.id)
    this.Router.navigateByUrl('/bookmarks')

  }
}

