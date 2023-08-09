import { Component, OnInit } from '@angular/core';
import { of} from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-operador-tap',
  templateUrl: './operador-tap.component.html',
  styleUrls: ['./operador-tap.component.scss'],
})
export class OperadorTapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const arr$ = of([
      {id: 1, name: 'Danilo', age: 31},
      {id: 2, name: 'Lendro', age: 20}
    ])

    const subs = arr$.pipe(
      map((value: any) => value.filter((val: any) => val.name === 'Lendro' )),
      tap(val => console.log(val))
    ).subscribe()
  }
}
