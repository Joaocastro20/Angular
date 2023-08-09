import { delay, fromEvent } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-delay',
  templateUrl: './operador-delay.component.html',
  styleUrls: ['./operador-delay.component.scss'],
})
export class OperadorDelayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const date = new Date('March 15, 2050 12:00:00'); // in the future
    const delayedClicks = clicks.pipe(delay(5000)); // click emitted only after that date
    delayedClicks.subscribe((x) => console.log(x));
  }
}
