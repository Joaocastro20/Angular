import { delay, startWith } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { combineLatest, of, timer } from 'rxjs';

@Component({
  selector: 'app-operador-combine-latest',
  templateUrl: './operador-combine-latest.component.html',
  styleUrls: ['./operador-combine-latest.component.scss'],
})
export class OperadorCombineLatestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observables = {
      a: of(1).pipe(delay(1000), startWith(0)),
      b: of(5).pipe(delay(5000), startWith(0)),
      c: of(10).pipe(delay(10000), startWith(0)),
    };
    // const combined = combineLatest(observables);
    // combined.subscribe((value) => console.log(value));
  }
}
