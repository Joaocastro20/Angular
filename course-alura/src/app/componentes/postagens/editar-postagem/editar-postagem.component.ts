import { Postagem } from 'src/app/shared/models/Postagem';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostServiceService } from 'src/app/shared/services/post-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-postagem',
  templateUrl: './editar-postagem.component.html',
  styleUrls: ['./editar-postagem.component.css']
})
export class EditarPostagemComponent implements OnInit {

  postagem!:Postagem

  fb!:FormGroup

  constructor(
    private service: PostServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.fb = this.formBuilder.group({
      id:[null],
      conteudo:[null,Validators.compose([Validators.required])] ,
      autoria:[null,Validators.compose([Validators.required,Validators.minLength(10)])] ,
      modelo:['modelo1']
    })
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe(
      (postagem)=>{
        this.postagem = postagem;
        this.updateForm(postagem)
      }
    )
  }

  habilitarBotao(){
    if(this.fb.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }


  editarPostagem(){
    this.service.editarPost(this.fb.value).subscribe(
      ()=>{this.router.navigate([''])}
    )

  }

  onCancelar(){
    this.router.navigate(['']);
  }

  updateForm(postagem:Postagem){
    this.fb.patchValue({
      id:postagem.id,
      conteudo:postagem.conteudo ,
      autoria:postagem.autoria,
      modelo:'modelo1'
    })
  }

}
