import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';


@Component({
  selector: 'app-operador-skip',
  templateUrl: './operador-skip.component.html',
  styleUrls: ['./operador-skip.component.scss'],
})
export class OperadorSkipComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // emit every half second
    const source = interval(500);
    // skip the first 10 emitted values
    const result = source.pipe(skip(10));

    result.subscribe((value) => console.log(value));
    // output: 10...11...12...13...
  }
}
