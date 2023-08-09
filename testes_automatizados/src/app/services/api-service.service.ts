import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any>{
     const http$ = forkJoin({
      apiLocal: this.http.get('http://localhost:3000/users'),
      apiExterna: this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    }).pipe(

      )
    return http$;
  }

  getUserSwitchMap(): Observable<any>{
    return this.http.get(`http://localhost:3000/cidade`);
  }

  getUserSwitchMapSearch(cidade: string): Observable<any>{
    return this.http.get(`http://localhost:3000/users?cidade=${cidade}`);
  }
}
