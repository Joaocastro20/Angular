import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-operador-pluck',
  templateUrl: './operador-pluck.component.html',
  styleUrls: ['./operador-pluck.component.scss']
})
export class OperadorPluckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const source = from([
      { name: 'Joe', age: 30 },
      { name: 'Sarah', age: 35 , job: {title: 'developer'}}
    ]);

    const exemplo = source.pipe(
      pluck('job', 'title')
    )

    const sub$ = exemplo.subscribe(console.log)
  }

}
