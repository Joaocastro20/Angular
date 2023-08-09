import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-operador-switch-map',
  templateUrl: './operador-switch-map.component.html',
  styleUrls: ['./operador-switch-map.component.scss']
})
export class OperadorSwitchMapComponent implements OnInit {

  @ViewChild('mybotao') mybotao!: ElementRef
  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {

    fromEvent(document, 'click').pipe(
      switchMap(() => this.apiService.getUserSwitchMap())
    ).pipe(
      map((data: any) => data.cidade),
      switchMap(cidade => this.apiService.getUserSwitchMapSearch(cidade))
    ).subscribe(console.log)

    fromEvent(document, 'click').pipe(
      switchMap(()=> interval(1000))
    ).subscribe(console.log)

  }

}
