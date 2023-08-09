import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-operador-switch-all',
  templateUrl: './operador-switch-all.component.html',
  styleUrls: ['./operador-switch-all.component.scss'],
})
export class OperadorSwitchAllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click').pipe(
      tap(() => console.log('click'))
    );
    const source = clicks.pipe(map(() => interval(1000)));

    source.pipe(switchAll()).subscribe((x) => console.log(x));
  }
}
