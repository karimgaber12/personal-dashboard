import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { routeAnimations } from './routeAnimations';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
  
})
export class AppComponent implements OnInit {

  dateTime: Observable<Date>

  ngOnInit() {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date()
      })
    )
  }
}
