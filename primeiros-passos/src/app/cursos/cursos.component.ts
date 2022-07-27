import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal:any;
  cursos: string[] ;
  constructor(private cursosService: CursosService) { 
    this.nomePortal = "https://tntsports.com.br/futebolbrasileiro/Confira-o-ranking-de-titulos-nacionais-e-internacionais-no-futebol-brasileiro-20220304-0003.html"; 
    

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
