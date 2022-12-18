import { Component, OnInit } from '@angular/core';
import { $ } from '../../../../../node_modules/jquery/dist/jquery.min.js';
declare var $:any

@Component({
  selector: 'app-monkey-type',
  templateUrl: './monkey-type.component.html',
  styleUrls: ['./monkey-type.component.scss']
})
export class MonkeyTypeComponent implements OnInit {
  qtdFrase: string;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
       $('h1').css({color:'orange', display:'block'});
    })
    this.contadorPalavras();
  }

  contadorPalavras(){
    $(document).ready(function(){
      var frase =  $('.frase').text();
      var tamanhoFrasearray = frase.split(' ').length
      console.log(tamanhoFrase)
      var tamanhoFrase = $('#tamanhoFrase')
      tamanhoFrase.text(tamanhoFrasearray)
   })
  }
}
