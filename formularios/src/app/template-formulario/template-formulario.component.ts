import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form} from '@angular/forms';


@Component({
  selector: 'app-template-formulario',
  templateUrl: './template-formulario.component.html',
  styleUrls: ['./template-formulario.component.css']
})
export class TemplateFormularioComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: ''
  }
  Dados: any = []

  onSubmit(form: any) {
    this.http.post('https://httpbin.org/post',JSON.stringify(form.value)).subscribe(resposta => console.log(resposta));
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  consultaCep(cep: any, form: Form) {
    var cep_replace = cep.replace(/\D/g, '');
    if (cep_replace != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep_replace)) {
        this.resetaForm(form);
        var url = 'https://viacep.com.br/ws/' + cep_replace + '/json';
        this.http.get(url).subscribe(resultado => this.popularForm(resultado, form));
      }
    }

  }
  popularForm(dados: any, formulario: any) {
    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        compl: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf,
      }
    })
  }
  resetaForm(formulario: any) {
    formulario.form.patchValue({
      endereco: {
        cep: null,
        rua: null,
        bairro: null,
        cidade: null,
        uf: null,
      }
    })
  }

}
