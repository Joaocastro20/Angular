
import { Component, OnInit } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-operador-fork-join',
  templateUrl: './operador-fork-join.component.html',
  styleUrls: ['./operador-fork-join.component.scss']
})
export class OperadorForkJoinComponent implements OnInit {

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(){
    this.apiService.getUsers().subscribe(res => console.log(res))
  }

}
