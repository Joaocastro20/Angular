import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-operador-of',
  templateUrl: './operador-of.component.html',
  styleUrls: ['./operador-of.component.scss']
})
export class OperadorOfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const operadorOf = of([10,20,30]).subscribe(o => console.log(o))
  }

}
