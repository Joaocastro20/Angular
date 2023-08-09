import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-operador-interval',
  templateUrl: './operador-interval.component.html',
  styleUrls: ['./operador-interval.component.scss']
})
export class OperadorIntervalComponent implements OnInit {

  time!: number;

  constructor() { }

  ngOnInit(): void {
    const intervalo = interval(1000).subscribe(o => this.time = o);

    setTimeout(() => {
      intervalo.unsubscribe();
      console.log('terminou!')
    }, 10000)
  }

}
