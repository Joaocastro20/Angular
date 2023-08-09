import { Component, OnInit } from '@angular/core';
import { delayWhen, interval, map, retryWhen, tap, timer } from 'rxjs';

@Component({
  selector: 'app-operador-retry-when',
  templateUrl: './operador-retry-when.component.html',
  styleUrls: ['./operador-retry-when.component.scss'],
})
export class OperadorRetryWhenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source = interval(1000);
    const result = source.pipe(
      map((value) => {
        if (value > 5) {
          // error will be picked up by retryWhen
          throw value;
        }
        return value;
      }),
      retryWhen((errors) =>
        errors.pipe(
          // log error message
          tap((value) => console.log(`Value ${value} was too high!`)),
          // restart in 5 seconds
          delayWhen((value) => timer(value * 1000))
        )
      )
    );

    result.subscribe((value) => console.log(value));
  }
}
