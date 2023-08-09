import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-operador-from',
  templateUrl: './operador-from.component.html',
  styleUrls: ['./operador-from.component.scss']
})
export class OperadorFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const list = [1,2,3,4,5]
    const number = '998978787898'
    const result = from(list)
    const resultNumber = from(number)
    result.subscribe(o => console.log(o))
    resultNumber.subscribe(o => console.log(o))
  }

}
