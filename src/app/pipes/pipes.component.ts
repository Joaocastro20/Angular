import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learnig javascript data structures and algotithm',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'http://a.co/glqjpRP'

  }
  numbers:string[] = ['angular','PHP','java']

  filtro:string = ''

  addCurso(curso:string){
    this.numbers.push(curso)
    console.log(this.numbers)
  }

  obterCursos(){
    if(this.numbers.length === 0||this.filtro===undefined||this.filtro.trim()===''){
      return this.numbers
    }
    return this.numbers.filter((v:string)=>{
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase())>=0){
        return true
      }
      return false
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
