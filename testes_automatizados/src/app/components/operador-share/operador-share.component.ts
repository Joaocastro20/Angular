import { Component, OnInit } from '@angular/core';
import { interval, map, share, take, tap } from 'rxjs';

@Component({
  selector: 'app-operador-share',
  templateUrl: './operador-share.component.html',
  styleUrls: ['./operador-share.component.scss']
})
export class OperadorShareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = interval(1000).pipe(
      tap(x => console.log('Processing: ', x)),
      map(x => x * x),
      take(6),
      share()
    );

    source.subscribe(x => console.log('subscription 1: ', x));
    source.subscribe(x => console.log('subscription 2: ', x));
  }

}
