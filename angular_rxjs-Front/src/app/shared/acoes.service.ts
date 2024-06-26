import { AcoesAPI, Acao } from './models/acoes';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map , tap, pluck} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  private readonly API = 'http://localhost:3000/acoes';

constructor(
  private http: HttpClient
) { }

getAcoes(valor?:string){
  const params = valor ? new HttpParams().append('valor',valor) : undefined;
  return this.http.get<any>(this.API,{params}).pipe(
    pluck('payload'),
    map((acoes)=>acoes.sort((acaoA,acaoB)=>this.ordenaPorCodigo(acaoA,acaoB)))
  );
}

private ordenaPorCodigo(acaoA: Acao,acaoB: Acao){
  if(acaoA.codigo > acaoB.codigo){
    return 1;
  }

  if(acaoA.codigo < acaoB.codigo){
    return -1;
  }

  return 0;
}
}
