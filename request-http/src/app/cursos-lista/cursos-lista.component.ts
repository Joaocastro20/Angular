import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from '../cursos-service.service';
import { Curso } from '../models/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces:true
})
export class CursosListaComponent implements OnInit {

  cursos!:Curso[];

  constructor(private service: CursosServiceService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.cursos = dados);
  }

  onRefresh(){

  }

  onEdit(curso:any){

  }

  onDelete(curso:any){

  }

  onConfirmDelete(){

  }

  onDeclineDelete(){

  }

}
