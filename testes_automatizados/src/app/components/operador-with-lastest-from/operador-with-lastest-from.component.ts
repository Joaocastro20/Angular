import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';


@Component({
  selector: 'app-operador-with-lastest-from',
  templateUrl: './operador-with-lastest-from.component.html',
  styleUrls: ['./operador-with-lastest-from.component.scss'],
})
export class OperadorWithLastestFromComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const timer = interval(1000);
    const result = clicks.pipe(withLatestFrom(timer));
    result.subscribe((x) => console.log(x));
  }
}
