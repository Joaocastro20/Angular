import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cidade } from '../models/cidade';
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
  getCheckBoxDinamico(){
    return[
      {id:1, valor:'opcão 1'},
      {id:2, valor:'opção 2'},
      {id:3, valor:'opção 3'},
      {id:4, valor:'opção 4'}
    ]
  }
  getCidades(estado: number){
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(map((cidades: Cidade[])=>cidades.filter(c => c.estado == estado)))
  }
}
