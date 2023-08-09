import { Component, OnInit } from '@angular/core';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-operador-zip',
  templateUrl: './operador-zip.component.html',
  styleUrls: ['./operador-zip.component.scss']
})
export class OperadorZipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs$ = of([1,2,3,4]);
    const obs2$ = of([4,3,2,1]);

    let result$ = zip(obs$, obs2$).subscribe(res => console.log(res))
  }

}
