import { Component, OnInit } from '@angular/core';
import {  of, timer } from 'rxjs';
import { concatMap } from 'rxjs/operators';


@Component({
  selector: 'app-operador-time',
  templateUrl: './operador-time.component.html',
  styleUrls: ['./operador-time.component.scss']
})
export class OperadorTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const values = of(1,2,3);

    timer(5000).pipe(concatMap(() => values)).subscribe(values => console.log(values))
  }

}
