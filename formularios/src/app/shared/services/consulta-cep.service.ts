import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http:HttpClient) { }
  consultarCep(cep:any) {
    var cep_replace = cep.replace(/\D/g, '');
    var url = 'https://viacep.com.br/ws/' + cep_replace + '/json';
    return  this.http.get(url);
  }
  buscarCargos(){
    return [
      {nome: 'junior'},
      {nome: 'pleno'},
      {nome: 'senior'}
    ]
  }
}
