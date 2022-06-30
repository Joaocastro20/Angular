import { Component, OnInit } from '@angular/core';

import { cService } from './cservice.service';
@Component({
  selector: 'app-cservice',
  templateUrl: './cservice.component.html',
  styleUrls: ['./cservice.component.css']
})
export class CserviceComponent implements OnInit {

  testeArray:string[] = []
  //testeService:cService

  constructor(private testeService:cService) { 
    //this.testeService =new cService();
    //this.testeService = testeService
  }

  ngOnInit(): void {
    this.testeArray = this.testeService.getString()
  }

}
