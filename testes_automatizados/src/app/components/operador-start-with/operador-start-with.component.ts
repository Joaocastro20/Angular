import { Component, OnInit } from '@angular/core';
import {  timer } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-operador-start-with',
  templateUrl: './operador-start-with.component.html',
  styleUrls: ['./operador-start-with.component.scss'],
})
export class OperadorStartWithComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    timer(1000)
      .pipe(
        map(() => 'timer emit'),
        startWith('timer start')
      )
      .subscribe((x) => console.log(x));
  }
}
