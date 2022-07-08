import { Component, OnInit } from '@angular/core';
import { RouteCursosService } from './route-cursos.service';

@Component({
  selector: 'app-route-cursos',
  templateUrl: './route-cursos.component.html',
  styleUrls: ['./route-cursos.component.css']
})
export class RouteCursosComponent implements OnInit {

  cursos: any[] = [];

  constructor(private routeCursosService: RouteCursosService) { }

  ngOnInit(): void {
    this.cursos = this.routeCursosService.getCursos()
  }

}
