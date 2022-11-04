import { environment } from './../../../../../request-http/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private readonly API = `${environment.API}`

  constructor(
    private http:HttpClient
  ) { }

  listarPost(){
    return this.http.get(`${this.API}posts`);
  }
}
