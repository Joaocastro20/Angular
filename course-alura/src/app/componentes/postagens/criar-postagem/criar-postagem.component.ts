import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/shared/services/post-service.service';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})
export class CriarPostagemComponent implements OnInit {

  fb!: FormGroup;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private service:PostServiceService
  ) { }

  ngOnInit(): void {
    this.fb = this.formBuilder.group({
      conteudo:[null,Validators.compose([
        Validators.required,Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])] ,
      autoria:[null,Validators.compose([
        Validators.required,Validators.minLength(10)
      ])] ,
      modelo:['modelo1'],
      favorito:[null]
    })
  }

  onSalvar(){
    if(this.fb.valid){
      this.service.salvarPost(this.fb.value).subscribe(
        sucess=> window.alert('Post salvo com sucesso'),
        error=> window.alert('Erro entre em contato com suporte tecnico')
      );
    }

  }

  onCancelar(){
    this.router.navigate([''])
  }

  habilitarBotao():string{
    if(this.fb.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }
}
