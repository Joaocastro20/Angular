import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() valorInicial = 10

  constructor() { 
    this.log('construtor')
  }

  ngOnChanges(){
    this.log('ngOnChanges')
  }

  ngOnInit(){
    this.log('ngOnInit')
  }

  ngDoCheck(){
    this.log('ngDoCheck')
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    
  }



  private log(hook:string){
    console.log(hook)
  }

}
