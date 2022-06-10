import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal:any;
  cursos = ['java','ruby','c#'] 
  constructor() { 
    this.nomePortal = "https://tntsports.com.br/futebolbrasileiro/Confira-o-ranking-de-titulos-nacionais-e-internacionais-no-futebol-brasileiro-20220304-0003.html"; 
  }

  ngOnInit(): void {
  }

}
