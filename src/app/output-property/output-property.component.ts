import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor:any = 0
  @Output() mudouValor = new EventEmitter();

  increment(){
    this.valor++
    this.mudouValor.emit({novovalor: this.valor})
  }
  decrement(){
    this.valor--
    this.mudouValor.emit({novovalor: this.valor})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
