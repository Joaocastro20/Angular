import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})
export class CriarPostagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSalvar(){
    window.alert("entrou")
  }

  onCancelar(){
    window.alert("entrou")
  }
}
