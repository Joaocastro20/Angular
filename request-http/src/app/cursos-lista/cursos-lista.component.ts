import { Component, OnInit } from '@angular/core';
import { catchError, empty, Observable, Subject } from 'rxjs';
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

  cursos$!: Observable<Curso[]>;

  error$ = new Subject<boolean>();

  constructor(private service: CursosServiceService) { }

  ngOnInit(): void {
    // this.service.list().subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.log(error);
        this.error$.next(true);
        return empty();
      })
    );
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
