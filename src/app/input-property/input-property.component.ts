import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs:['nomeCurso']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso:string = 'iput';

  constructor() { }

  ngOnInit(): void {
  }

}
