import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-operador-catch-error',
  templateUrl: './operador-catch-error.component.html',
  styleUrls: ['./operador-catch-error.component.scss'],
})
export class OperadorCatchErrorComponent implements OnInit {
  constructor(
   private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     map((n) => {
    //       if (n === 4) {
    //         throw 'four!';
    //       }
    //       return n;
    //     }),
    //     catchError((err) => of('I', 'II', 'III', 'IV', 'V'))
    //   )
    //   .subscribe((x) => console.log(x));
    const result$ = this.apiService.getUsers().subscribe(console.log)
  }
}
