import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-formulario',
  templateUrl: './data-formulario.component.html',
  styleUrls: ['./data-formulario.component.css']
})
export class DataFormularioComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    // primeira forma de se contruir o formulario
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }

  onSubmit(){
    this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value)).subscribe(resposta => console.log(resposta));
    console.log(this.formulario.value)
  }

}
