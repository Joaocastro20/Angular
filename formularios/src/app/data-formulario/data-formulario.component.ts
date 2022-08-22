import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-formulario',
  templateUrl: './data-formulario.component.html',
  styleUrls: ['./data-formulario.component.css']
})
export class DataFormularioComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    // primeira forma de se contruir o formulario
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null],
        numero: [null],
        complemento: [null],
        rua: [null],
        bairro: [null],
        cidade: [null],
        estado: [null]
      })

    })

  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(resposta => console.log(resposta));
      window.alert('Formulario enviado com sucesso!')
    } else {
      console.log('Formulario invalido');
      Object.keys(this.formulario.controls).forEach(campo => { window.alert('Verifique o ' + campo) })
    }
    this.formulario.reset();

  }
  verificaValidTouch(campo: any) {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }
  consultarCep() {
    var cep = this.formulario.get('endereco.cep')?.value;
    var cep_replace = cep.replace(/\D/g, '');
    if (cep_replace != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep_replace)) {
        var url = 'https://viacep.com.br/ws/' + cep_replace + '/json';
        this.http.get(url).subscribe(resultado => this.popularForm(resultado));
      }
    }
  }
  resetaForm() {
    this.formulario.reset()
  }
  popularForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf,
      }
    }

    )
  }
  validarFormulario() {
    return this.formulario.valid;
  }
}
