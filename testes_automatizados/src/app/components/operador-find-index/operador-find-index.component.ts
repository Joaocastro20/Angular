import { Component, OnInit } from '@angular/core';
import { findIndex, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-operador-find-index',
  templateUrl: './operador-find-index.component.html',
  styleUrls: ['./operador-find-index.component.scss'],
})
export class OperadorFindIndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const div = document.createElement('div');
    // div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
    // document.body.appendChild(div);

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(
    //   findIndex((ev) => (<HTMLElement>ev.target).tagName === 'DIV')
    // );
    // result.subscribe((x) => console.log(x));

    const arr$ = of(
      {id: 1, nome: 'a'},
      {id: 2, nome: 'b'},
      {id: 3, nome: 'c'},
      {id: 4, nome: 'd'},
      {id: 5, nome: 'e'},
    );

    arr$.pipe(
      findIndex((val) => val.nome === 'c')
    ).subscribe(console.log)
  }
}
