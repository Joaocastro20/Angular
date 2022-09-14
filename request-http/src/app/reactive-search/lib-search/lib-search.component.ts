import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable,tap } from 'rxjs';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries'

  total!: any;

  results$!: any[];

  teste = [
    {name: 'java',
    version: 1  
  },
  {name: 'PHP',
version: 2}
  ]

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    
  }

  onSearch(pesquisa:any){
    

    this.http.get(this.SEARCH_URL+'?search=angular').pipe(
      tap((res:any) => this.total = res.total),
      map((res:any) => res.results)
    ).subscribe(dados => this.results$ = dados)
    
    console.log(this.results$)
  }
}
