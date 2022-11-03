import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css'],
})
export class ListarPostagemComponent implements OnInit {
  postagens = [
    {
      conteudo: 'I love AngularLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    },
    {
      conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      autoria: 'Nay',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  larguraPostagem(postagem: any) {
    if (postagem.conteudo.length > 200) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
