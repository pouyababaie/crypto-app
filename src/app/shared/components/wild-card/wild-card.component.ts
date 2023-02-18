import { Component, OnInit } from '@angular/core';
import {
  from,
  fromEvent,
  map,
  mapTo,
  merge,
  of,
  pipe,
  scan,
  scheduled,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.scss'],
})
export class WildCardComponent implements OnInit {
  constructor() {}
  speed: number = 10;
  start$!: Observable<any>;
  ngOnInit(): void {
    this.start$ = this.incrementCounter().pipe(
      take(404),
      map((x) => x + 1)
    );
  }

  incrementCounter() {
    return timer(1, this.speed);
    // .pipe(
    //   scan((acc, curr) => acc + this.rate, this.counter),
    //   takeUntil(this.pauseCounter$)
    // );
  }
}
