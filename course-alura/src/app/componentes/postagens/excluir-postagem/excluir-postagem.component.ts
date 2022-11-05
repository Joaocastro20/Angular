import { Postagem } from 'src/app/shared/models/Postagem';
import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/shared/services/post-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-postagem',
  templateUrl: './excluir-postagem.component.html',
  styleUrls: ['./excluir-postagem.component.css'],
})
export class ExcluirPostagemComponent implements OnInit {
  postagem!: Postagem;

  constructor(
    private service: PostServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(parseInt(id!))
      .subscribe((postagem) => (this.postagem = postagem));
  }

  excluirPostagem() {
    if (this.postagem.id) {
      this.service.deletarPost(this.postagem.id).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  cancelarPostagem() {
    this.router.navigate(['']);
  }
}
