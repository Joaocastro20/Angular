import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs/operators';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-operador-to-array',
  templateUrl: './operador-to-array.component.html',
  styleUrls: ['./operador-to-array.component.scss']
})
export class OperadorToArrayComponent implements OnInit {

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    const result$ = this.apiService.getUsers().pipe(
      // toArray()
    ).subscribe(console.log)


    const result2$ = this.apiService.getUsers().pipe(
    ).subscribe(console.log)
  }


}
