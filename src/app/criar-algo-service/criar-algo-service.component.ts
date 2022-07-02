import { Component, OnInit } from '@angular/core';

import { cService } from '../cservice/cservice.service';
@Component({
  selector: 'app-criar-algo-service',
  templateUrl: './criar-algo-service.component.html',
  styleUrls: ['./criar-algo-service.component.css']
})
export class CriarAlgoServiceComponent implements OnInit {

  arrayTeste:string[] = []

  constructor(private cService:cService) { }

  ngOnInit(): void {
    this.arrayTeste = this.cService.getString()
    this.cService.elementoCriado.subscribe(
      elemento => console.log(elemento)
    )
  }
  addNewElement(elemento:string){
    this.cService.addNewElement(elemento)
  }

}
