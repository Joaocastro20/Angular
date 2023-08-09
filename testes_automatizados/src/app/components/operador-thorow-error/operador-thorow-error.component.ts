import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-operador-thorow-error',
  templateUrl: './operador-thorow-error.component.html',
  styleUrls: ['./operador-thorow-error.component.scss']
})
export class OperadorThorowErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const erro = throwError('erro!');

    erro.subscribe(res => {

    },
    (error) => {
      console.log('erro aqui', error)
    })
  }

}
