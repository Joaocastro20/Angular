import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/shared/models/Postagem';
import { PostServiceService } from 'src/app/shared/services/post-service.service';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css'],
})
export class ListarPostagemComponent implements OnInit {

  listaDePostagens!: Postagem[];

  constructor(private service: PostServiceService) {}

  ngOnInit(): void {
    this.service.listarPost().subscribe((posts:any) => {
      this.listaDePostagens = posts;
    });
  }

  larguraPostagem(postagem: any) {
    if (postagem.conteudo.length > 200) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
