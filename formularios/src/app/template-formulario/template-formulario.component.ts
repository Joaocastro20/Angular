import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-formulario',
  templateUrl: './template-formulario.component.html',
  styleUrls: ['./template-formulario.component.css']
})
export class TemplateFormularioComponent implements OnInit {

  onSubmit(form:any){
    console.log(form)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
