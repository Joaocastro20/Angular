import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from './../../../../../request-http/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private readonly API = `${environment.API}`

  constructor(
    private http:HttpClient
  ) { }

  listarPost():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`${this.API}posts`);
  }

  salvarPost(postagem:FormGroup<any>):Observable<Postagem>{
    return this.http.post<Postagem>(`${this.API}posts`,postagem);
  }
}
