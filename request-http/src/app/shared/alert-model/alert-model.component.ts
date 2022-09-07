import { Component, Input, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-alert-model',
  templateUrl: './alert-model.component.html',
  styleUrls: ['./alert-model.component.scss']
})
export class AlertModelComponent implements OnInit {

  @Input() message!:string;

  @Input() tipo = 'sucess';

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }
  onClose(){
    this.bsModalRef.hide();
  }
}
