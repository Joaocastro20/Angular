import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import {  mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-operador-map-to',
  templateUrl: './operador-map-to.component.html',
  styleUrls: ['./operador-map-to.component.scss']
})
export class OperadorMapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const click = fromEvent(document, 'click');

    const mapto$ = click.pipe(mapTo([1,2,3,4]))

    mapto$.subscribe(console.log)

  }

}
