import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {  fromEvent } from 'rxjs';

@Component({
  selector: 'app-operador-debounce-time',
  templateUrl: './operador-debounce-time.component.html',
  styleUrls: ['./operador-debounce-time.component.scss'],
})
export class OperadorDebounceTimeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(debounceTime(3000));
    result.subscribe((x) => console.log(x));
  }
}
