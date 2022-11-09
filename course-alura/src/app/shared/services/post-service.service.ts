import { Postagem } from 'src/app/shared/models/Postagem';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from './../../../../../request-http/src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  private readonly API = `${environment.API}`;

  constructor(private http: HttpClient) {}

  listarPost(pagina: number): Observable<Postagem[]> {
    let params = new HttpParams().set('_page', pagina).set('_limit', 6);
    console.log(params);
    return this.http.get<Postagem[]>(`${this.API}posts`, { params });
  }

  salvarPost(postagem: FormGroup<any>): Observable<Postagem> {
    return this.http.post<Postagem>(`${this.API}posts`, postagem);
  }

  deletarPost(id: number) {
    return this.http.delete(`${this.API}posts/${id}`);
  }

  buscarPorId(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`${this.API}posts/${id}`);
  }

  editarPost(postagem: Postagem): Observable<Postagem> {
    let id = postagem.id;
    return this.http.put<Postagem>(`${this.API}posts/${id}`, postagem);
  }

  buscarPorTexto(query: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.API}posts?q=${query}`);
  }

  mudarFavorito(postagem:Postagem):Observable<Postagem>{
    postagem.favorito = !postagem.favorito;
    return this.editarPost(postagem);
  }
}
