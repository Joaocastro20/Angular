import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Curso } from './models/curso';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  private readonly API = `${environment.API}cursos`

  constructor(private http : HttpClient) { }

  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(1000)
    );
  }
}
