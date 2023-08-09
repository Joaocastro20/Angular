import { Component, OnInit } from '@angular/core';
import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';


@Component({
  selector: 'app-operador-retry',
  templateUrl: './operador-retry.component.html',
  styleUrls: ['./operador-retry.component.scss'],
})
export class OperadorRetryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source = interval(1000);
    const result = source.pipe(
      mergeMap((val) => (val > 5 ? throwError(() => 'Error!') : of(val))),
      retry(2) // retry 2 times on error
    );

    result.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(`${err}: Retried 2 times then quit!`),
    });
  }
}
