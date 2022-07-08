import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-curso-detalhes',
  templateUrl: './route-curso-detalhes.component.html',
  styleUrls: ['./route-curso-detalhes.component.css']
})
export class RouteCursoDetalhesComponent implements OnInit {

  id: any;
  inscricao: Subscription = new Subscription;

  constructor(private route: ActivatedRoute) {
    //console.log(this.route)
    //this.id = this.route.snapshot.params['id']
   }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id']
      }
    )
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
