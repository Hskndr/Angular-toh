import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
  observable: Observable<number>

  constructor() {
  }

  ngOnInit() {
    this.observable = Observable.create(observer => {
      let value = 0
      const interval = setInterval(() => {
        observer.next(value)
        value++
      }, 1000)
      return () => clearInterval(interval)
    })
  }

}
