import { Component, OnInit } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';

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
