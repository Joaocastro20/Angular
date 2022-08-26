import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado} from '../models/estado';
import {Pais} from '../models/pais';



@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(public http:HttpClient) { }

  getEstadosBr(){
    return this.http.get<Estado[]>('assets/dados/estados.json');//.pipe();
  }
  getPaisesBr(){
    return this.http.get<Pais[]>('assets/dados/paises.json');
  }
  getNewsLetter(){
    return [
      {valor:'s',desc:'sim'},
      {valor:'n',desc:'nao'}
    ]
  }
}
