import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = [];

  mostrarC: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mudarValorMostrar(){
    this.mostrarC = !this.mostrarC;
  }
}
