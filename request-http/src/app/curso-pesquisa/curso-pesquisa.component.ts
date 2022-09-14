import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs';

@Component({
  selector: 'app-curso-pesquisa',
  templateUrl: './curso-pesquisa.component.html',
  styleUrls: ['./curso-pesquisa.component.scss']
})
export class CursoPesquisaComponent implements OnInit {

  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries'

  total!: any;

  results$!: any[];


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    
  }

  onSearch(pesquisa:any){
    let value = pesquisa;
    const fields = 'name,description,version,homepage'
    if(value && (value.trim())!=''){

      let params = new HttpParams();
      params = params.set('search',value);
      params = params.set('fields',fields)

      this.http.get(this.SEARCH_URL,{params}).pipe(
        tap((res:any) => this.total = res.total),
        map((res:any) => res.results)
      ).subscribe(dados => this.results$ = dados)
  }
}
}
