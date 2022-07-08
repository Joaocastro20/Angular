import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteCursosService } from '../route-cursos/route-cursos.service';

@Component({
  selector: 'app-route-curso-detalhes',
  templateUrl: './route-curso-detalhes.component.html',
  styleUrls: ['./route-curso-detalhes.component.css']
})
export class RouteCursoDetalhesComponent implements OnInit {

  id: any;
  inscricao: Subscription = new Subscription;
  curso: any;

  constructor(private route: ActivatedRoute,private service:RouteCursosService,private router: Router ) {
    //console.log(this.route)
    //this.id = this.route.snapshot.params['id']
   }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id']
        this.curso = this.service.getCurso(this.id)
        if(this.curso == null){
          this.router.navigate(['/naoEncontrado'])
        }
      }
    )
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
