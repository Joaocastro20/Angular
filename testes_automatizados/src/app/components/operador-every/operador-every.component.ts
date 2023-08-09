import { Component, OnInit } from '@angular/core';
import {  of } from 'rxjs';
import {  every } from 'rxjs/operators';

@Component({
  selector: 'app-operador-every',
  templateUrl: './operador-every.component.html',
  styleUrls: ['./operador-every.component.scss'],
})
export class OperadorEveryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6)
      .pipe(every((x) => x < 5))
      .subscribe((x) => console.log(x)); // -> false
  }
}
