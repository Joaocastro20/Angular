import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  data:any = 'qualquer coisa';
  true:boolean = true;
  url = "http://lorempixel.com.br/200/200/?1";

  getValor(){
    return 5;
  }
  getTrue(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
