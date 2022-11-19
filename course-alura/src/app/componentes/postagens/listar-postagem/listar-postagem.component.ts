import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/shared/models/Postagem';
import { PostServiceService } from 'src/app/shared/services/post-service.service';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css'],
})
export class ListarPostagemComponent implements OnInit {

  postagemFavorito!:Postagem;

  thereAreMorePosts = true;

  listaDePostagens!: Postagem[];

  paginaAtual:number = 2 ;

  filtro!:string;

  favoritosControl: boolean = true;

  muralFavoritoControl: boolean = false;

  constructor(
    private service: PostServiceService,
    private router:Router
    ) {}

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

  validarBotaoFavorito(postagem:Postagem){
    if(postagem.favorito){
      return 'ativado';
    }else{
      return 'desativado';
    }
  }

  onFavorito(postagem:Postagem){
    this.service.mudarFavorito(postagem).subscribe();
    if(!postagem.favorito && this.muralFavoritoControl == true){
      this.buscarFavoritos();
    }

  }

  buscarFavoritos(){
    this.muralFavoritoControl = true;
    this.service.buscarPorTexto('true').subscribe(
      postagens=>{
        this.listaDePostagens = postagens;
      }
    )
    this.favoritosControl = false;
  }

  refreshTela(){
    this.muralFavoritoControl = false;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
