import { Component } from '@angular/core';
import { AuthService } from './route-cursos/route-login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  valor:number = 5
  deletar:boolean = false
  mostrarMenu: boolean = false

  mudarValor(){
    this.valor++
  }

  destruirCiclo(){
    this.deletar = true
  }

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

}
