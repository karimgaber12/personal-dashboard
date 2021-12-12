import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] = []

  
  constructor() {
    this.loadState()
  }
  
  getBookmarks() {
    return this.bookmarks
  }

  getBookmark(id: any) {
    return this.bookmarks.find(b => b.id === id)
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark)
    this.saveState()

  }

  updateBookmark(id: any, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id)
    Object.assign(bookmark, updatedFields)
    this.saveState()

  }

  deleteBookmark(id: any) {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if (bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex, 1)
    this.saveState()
  }

    // create saveState for localStorage
    saveState(){
      
      localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks))  // use stringify to save as string
    
    }
    // create LoadState to and but in in the constructor
    loadState(){

      const bookmarksInLocalStorage = JSON.parse(localStorage.getItem("bookmarks") || '{}',(key,value)=>{
        if (key == 'url') return new URL(value)
          return value
        
      }) // return Data to JS object
  
      if(!bookmarksInLocalStorage) return
  
      this.bookmarks.length = 0
      
      this.bookmarks.push(...bookmarksInLocalStorage)
  

  }


}