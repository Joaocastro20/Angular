import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Curso } from './models/curso';
import { environment } from 'src/environments/environment';
import { delay, take } from 'rxjs';

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
  create(curso:Curso){
    return this.http.post(this.API, curso).pipe(take(1));
  }
}
