import { AcoesService } from './../shared/acoes.service';
import { Acoes, AcoesAPI } from './../shared/models/acoes';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subscribable, Subscription } from 'rxjs';
import { map, tap, switchMap, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

const TIME = 300;

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  todasAcoes$ = this.service.getAcoes();
  filtroInput$ = this.acoesInput.valueChanges.pipe(
    filter((valorDigitado)=>valorDigitado.length >= 3 && valorDigitado.length < 10 || !valorDigitado.length),
    debounceTime(TIME),
    distinctUntilChanged(),
    switchMap((valorDigitado)=>this.service.getAcoes(valorDigitado))
  );
  acoes$ = merge(this.todasAcoes$,this.filtroInput$);

  constructor(
    private service: AcoesService
  ) {}

  ngOnInit(){
  }

  ngOnDestroy(){
  }
}
