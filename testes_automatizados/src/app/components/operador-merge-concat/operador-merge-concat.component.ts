import { Component, OnInit } from '@angular/core';
import { interval, concat, merge } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-operador-merge-concat',
  templateUrl: './operador-merge-concat.component.html',
  styleUrls: ['./operador-merge-concat.component.scss']
})
export class OperadorMergeConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    // const result$ = concat(timer1, timer2, timer3).subscribe(console.log)
    const result$ = merge(timer1, timer2, timer3).subscribe(console.log)

  }

}
