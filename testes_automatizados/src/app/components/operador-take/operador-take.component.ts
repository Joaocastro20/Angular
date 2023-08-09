import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-operador-take',
  templateUrl: './operador-take.component.html',
  styleUrls: ['./operador-take.component.scss'],
})
export class OperadorTakeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //emit 1,2,3,4,5
    const source = of(1, 2, 3, 4, 5);
    //take the first emitted value then complete
    const example = source.pipe(take(3));
    //output: 1
    const subscribe = example.subscribe((val) => console.log(val));

    const result$ = interval(1000).pipe(
      take(4)
    ).subscribe(console.log)
  }
}
