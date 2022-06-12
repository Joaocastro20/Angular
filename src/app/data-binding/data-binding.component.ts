import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  data:any = 'qualquer coisa';
  true:boolean = true;
  url = "http://lorempixel.com.br/100/100/?1";
  valorAtual:string = '';
  valoSalvo:any
  varMouse:boolean = false;
  nomeDoCurso:string = 'angular';
  nome:any = 'testetwo-way';
  pessoa:any ={
    nome: 'mary',
    idade: 20
  }

  getValor(){
    return 5;
  }
  getTrue(){
    return true;
  }
  botaoClicado(){
    alert('clicou');
  }
  onKeyUp(evento:KeyboardEvent){
    console.log;
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
    
  }
  salvarValor(valor:any){
    this.valoSalvo = valor;
  }
  onMouseOver(){
    this.varMouse = !this.varMouse;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
