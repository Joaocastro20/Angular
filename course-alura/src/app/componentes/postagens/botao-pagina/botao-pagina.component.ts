import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-pagina',
  templateUrl: './botao-pagina.component.html',
  styleUrls: ['./botao-pagina.component.css']
})
export class BotaoPaginaComponent implements OnInit {

  @Input() thereAreMorePosts = false;

  constructor() { }

  ngOnInit(): void {
  }
  
}
