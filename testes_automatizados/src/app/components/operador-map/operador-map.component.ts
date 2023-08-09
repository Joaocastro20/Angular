import { from, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-map',
  templateUrl: './operador-map.component.html',
  styleUrls: ['./operador-map.component.scss']
})
export class OperadorMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const array$ = from(
      [
        {
        nome: "João",
        idade: 30,
        email: "joao@example.com",
        cidade: "São Paulo"
        },
        {
        nome: "Maria",
        idade: 25,
        email: "maria@example.com",
        cidade: "Rio de Janeiro"
        },
        {
        nome: "Pedro",
        idade: 28,
        email: "pedro@example.com",
        cidade: "Belo Horizonte"
        }
        ]
    )

    const arrayMap$ =  array$.pipe(
      map(({nome}) => nome + 'lol')
    )

    arrayMap$.subscribe(console.log)
  }


}
