import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-operador-take-while',
  templateUrl: './operador-take-while.component.html',
  styleUrls: ['./operador-take-while.component.scss'],
})
export class OperadorTakeWhileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const int$ = interval(1000);
    const subs = int$.pipe(
      takeWhile(v => v <=5)
    )

    subs.subscribe(console.log)
  }
}
