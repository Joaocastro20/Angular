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
    this.modifyDivFilha();
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
    $(function(){
      $('.div1').hide()
                .delay('1000')
                .fadeIn(1000)
                .css({color:'green','font-size':'30px'})
      $('.div1 h2').hide()
                   .delay('2000')
                   .fadeIn(1000)
                   .css({color:'blue'})
      $('.div1 p').hide()
                   .delay('3000')
                   .fadeIn(1000)
                   .css({color:'blue'})
    })
  }
}
