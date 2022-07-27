import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteCursosService } from './route-cursos.service';

@Component({
  selector: 'app-route-cursos',
  templateUrl: './route-cursos.component.html',
  styleUrls: ['./route-cursos.component.css']
})
export class RouteCursosComponent implements OnInit {

  cursos: any[] = [];
  pagina: any;
  inscricao: Subscription = new Subscription;

  constructor(private routeCursosService: RouteCursosService, private route: ActivatedRoute,private router: Router) { }

  OnProximaPagina(){
    //this.pagina++
    this.router.navigate(['/cursos'],
    {queryParams:{'pagina':++this.pagina}})
  }

  ngOnInit(): void {
    this.cursos = this.routeCursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe((queryP:any)=>{
      this.pagina = queryP['pagina']
    })
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe
  }

}
