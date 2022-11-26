import { Component, OnInit } from '@angular/core';
import { $ } from '../../../../../node_modules/jquery/dist/jquery.min.js';
declare var $:any

@Component({
  selector: 'app-jquery-testes',
  templateUrl: './jquery-testes.component.html',
  styleUrls: ['./jquery-testes.component.scss']
})
export class JqueryTestesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  testeJquery(){
    $(document).ready(function(){
      // $('h1').delay('10000');
      // $('h1').css('color','blue');
      // $('h2').css('color','red');
      // $('h1').fadeIn("slow");
      // $('h3').hide();
      // $('h1').text('Agora mudou');

      //encadeiamento
      // $('h2').css('color','orange')
      // .text('clique aqui para deixar branco')
      // .click(function(){
      //   $('h1').css('color','white')
      // })

      // $('a').css({color:'white', display:'block'});
    })
  }
  modifyDivFilha(){
    
  }
}
