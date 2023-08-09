import { Component, OnInit } from '@angular/core';
import { Observable, Subject, interval, observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initObservable();
  }

  initObservable(){
    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(v)
    })

    subject.next(10)
  }

}
