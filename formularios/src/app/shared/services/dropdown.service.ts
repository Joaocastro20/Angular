import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado';



@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(public http:HttpClient) { }

  getEstadosBr(){
    return this.http.get<Estado[]>('assets/dados/estados.json');//.pipe();
  }
}