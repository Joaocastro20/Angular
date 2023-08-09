import { Component, OnInit } from '@angular/core';
import {  of } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-operador-is-empty',
  templateUrl: './operador-is-empty.component.html',
  styleUrls: ['./operador-is-empty.component.scss']
})
export class OperadorIsEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const arr$ = of();
    arr$.pipe(isEmpty()).subscribe(console.log)
  }

}
