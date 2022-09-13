import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  total!: any;

  results$!: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  onSearch(pesquisa:any){
    console.log(pesquisa)
    
  }
}
