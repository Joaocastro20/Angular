import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/shared/models/Postagem';
import { PostServiceService } from 'src/app/shared/services/post-service.service';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css'],
})
export class ListarPostagemComponent implements OnInit {

  thereAreMorePosts = true;

  listaDePostagens!: Postagem[];

  paginaAtual:number = 2 ;

  filtro!:string;

  constructor(private service: PostServiceService) {}

  ngOnInit(): void {
    this.service.listarPost(1).subscribe((posts:any) => {
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

  carregarMaisPostagens(){
    this.service.listarPost(this.paginaAtual++).subscribe(
      listaPostagens =>{
        this.listaDePostagens.push(...listaPostagens);
        if(!listaPostagens.length){
          this.thereAreMorePosts = false;
        }
      }
    )
  }

  onSearch(){
    this.service.buscarPorTexto(this.filtro).subscribe(
      postagens=>{
        this.listaDePostagens = postagens;
      }
    )
  }
}
