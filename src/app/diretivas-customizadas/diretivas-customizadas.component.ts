import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {
  
  mostrarConteudo:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarConteudo(){
    this.mostrarConteudo = !this.mostrarConteudo
  }

}
