import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  deServicoPraServico(msg:string){
    console.log(msg)
  }
}
