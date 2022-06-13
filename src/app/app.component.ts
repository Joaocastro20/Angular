import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  valor:number = 5
  deletar:boolean = false

  mudarValor(){
    this.valor++
  }

  destruirCiclo(){
    this.deletar = true
  }

}
