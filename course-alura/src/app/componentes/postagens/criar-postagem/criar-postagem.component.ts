import { FormGroup, FormBuilder } from '@angular/forms';
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
      conteudo:[null] ,
      autoria:[null] ,
      modelo:['modelo1']
    })
  }

  onSalvar(){
    console.log(this.fb.value)
    this.service.salvarPost(this.fb.value).subscribe(
      sucess=> window.alert('Post salvo com sucesso'),
      error=> window.alert('Erro entre em contato com suporte tecnico')
    );
  }

  onCancelar(){
    this.router.navigate([''])
  }
}
