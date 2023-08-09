import { Component, OnInit } from '@angular/core';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-operador-ajax',
  templateUrl: './operador-ajax.component.html',
  styleUrls: ['./operador-ajax.component.scss']
})
export class OperadorAjaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const http$ = ajax.getJSON('http://localhost:3000/users');

    http$.subscribe(res => console.log(res));
  }

}
