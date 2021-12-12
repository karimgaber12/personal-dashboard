import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookmark: Bookmark

  DynamicSrc : string // property to use it as a variable for src icon
  dysrc : string
  faviconError : boolean // property to use it as a sign of error that not founding a favicon
  constructor() { }

  ngOnInit(): void {
    this.DynamicSrc = this.bookmark.url.origin + '/favicon.ico'  // to generate icon dynamic
       // bind in html file [src]='DynamicSrc'

    this.dysrc = this.bookmark.url.origin
  }

}
