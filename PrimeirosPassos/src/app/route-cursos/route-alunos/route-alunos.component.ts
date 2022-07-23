import { Component, OnInit } from '@angular/core';
import { RouteAlunosService } from './route-alunos.service';

@Component({
  selector: 'app-route-alunos',
  templateUrl: './route-alunos.component.html',
  styleUrls: ['./route-alunos.component.css']
})
export class RouteAlunosComponent implements OnInit {

  alunos: any[] = []

  constructor(private alunosService: RouteAlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
