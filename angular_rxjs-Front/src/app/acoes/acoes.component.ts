import { AcoesService } from './../shared/acoes.service';
import { Acoes, AcoesAPI } from './../shared/models/acoes';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  acoes$ = this.service.getAcoes();

  constructor(
    private service: AcoesService
  ) {}

  ngOnInit(){
  }

  ngOnDestroy(){
  }
}
