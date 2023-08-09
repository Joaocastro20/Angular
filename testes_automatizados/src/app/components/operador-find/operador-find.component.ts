import { Component, OnInit } from '@angular/core';
import { find, fromEvent } from 'rxjs';

@Component({
  selector: 'app-operador-find',
  templateUrl: './operador-find.component.html',
  styleUrls: ['./operador-find.component.scss'],
})
export class OperadorFindComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const div = document.createElement('div');
    div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
    document.body.appendChild(div);

    const div2 = document.createElement('div');
    div2.style.cssText = 'width: 200px; height: 200px; background: red;'
    document.body.appendChild(div2);

    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      find((ev) => (<HTMLElement>ev.target).tagName === 'DIV')
    );
    result.subscribe((x) => console.log(x));
  }
}
