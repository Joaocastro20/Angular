import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-operador-from-event',
  templateUrl: './operador-from-event.component.html',
  styleUrls: ['./operador-from-event.component.scss']
})
export class OperadorFromEventComponent implements OnInit {

  @ViewChild('botao') botao !: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const eventoClick = fromEvent(document, 'click')
    eventoClick.subscribe(o => console.log(o))
  }

}
