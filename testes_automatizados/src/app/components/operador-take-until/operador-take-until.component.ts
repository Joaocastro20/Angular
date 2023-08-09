import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-operador-take-until',
  templateUrl: './operador-take-until.component.html',
  styleUrls: ['./operador-take-until.component.scss'],
})
export class OperadorTakeUntilComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source = interval(1000);
    const clicks = fromEvent(document, 'click');
    const result = source.pipe(takeUntil(clicks));
    result.subscribe((x) => console.log(x));
  }
}
