import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css'],
})
export class ListarPostagemComponent implements OnInit {
  postagens = [
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3',
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo2',
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo2',
    }

  ];

  constructor() {}

  ngOnInit(): void {}
}
