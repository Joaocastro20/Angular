import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Estado } from '../shared/models/estado';
import { Pais } from '../shared/models/pais';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-formulario',
  templateUrl: './data-formulario.component.html',
  styleUrls: ['./data-formulario.component.css']
})
export class DataFormularioComponent implements OnInit {

  formulario!: FormGroup;
  //estados: Estado[] = [];
  estados!: Observable<Estado[]>;
  cargos!: any[];
  paises!:Observable<Pais[]>;
  newsOpcoes!:any[];
  checkbox_dinamico!:any[];

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private service:DropdownService,
    private cepService: ConsultaCepService ) { }

  ngOnInit(): void {
    this.buildCheckBoxDinamico();
    this.estados = this.service.getEstadosBr();
    this.cargos = this.cepService.buscarCargos();
    this.paises = this.service.getPaisesBr();
    this.newsOpcoes = this.service.getNewsLetter();
    this.checkbox_dinamico = this.service.getCheckBoxDinamico();
    // this.service.getEstadosBr().subscribe(dados => {this.estados = dados,console.log(this.estados)})
    // primeira forma de se contruir o formulario
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      confirmaEmail: [null, [DataFormularioComponent.equalsTo('email'),Validators.required]],
      checkbox_dinamico: this.buildCheckBoxDinamico(),
      endereco: this.formBuilder.group({
        cep: [null],
        numero: [null],
        complemento: [null],
        rua: [null],
        bairro: [null],
        cidade: [null],
        estado: [null],
        cargo: [null],
        pais: [null],
        newsletter:[null],
        checkbox:[null,Validators.pattern('true')]
      })

    })

  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(resposta => console.log(resposta));
      window.alert('Formulario enviado com sucesso!');
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
        this.cepService.consultarCep(cep_replace).subscribe(dados => this.popularForm(dados));
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
  setarCargo(){
    const cargo = {nome: 'junior'};
    this.formulario.get( 'cargo')?.setValue(cargo);
  }
  buildCheckBoxDinamico(){
    const values = this.service.getCheckBoxDinamico().map(v => new FormControl(false));
    return this.formBuilder.array(values);
  }
  static equalsTo(otherField: string){
    const validador = (formControl: FormControl)=>{
      if(otherField == null){
        throw new Error('E necessario informar o campo!');
      }
      if(!formControl.root || !(<FormGroup>formControl.root).get(otherField)){
        return null;
      }
      const field = (<FormGroup>formControl.root).get(otherField);

      if(!field){
        throw new Error('E necessario informa um campo valido!')
      }

      if(field.value !== formControl.value){
        return {equalsTo: otherField};
      }
      return null;
    }
    return validador;
  }
}
