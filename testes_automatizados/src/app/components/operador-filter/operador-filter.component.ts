import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-operador-filter',
  templateUrl: './operador-filter.component.html',
  styleUrls: ['./operador-filter.component.scss'],
})
export class OperadorFilterComponent implements OnInit {
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
    const source = from([
      { name: 'Joe', age: 31 },
      { name: 'Bob', age: 25 },
    ]);
    //filter out people with age under 30
    const example = source.pipe(filter((person) => person.age >= 30));
    //output: "Over 30: Joe"
    const subscribe = example.subscribe((val) =>
      console.log(`Over 30: ${val.name}`)
    );

    //emit (1,2,3,4,5)
    const source2 = from([1, 2, 3, 4, 5]);
    //filter out non-even numbers
    const example2 = source2.pipe(filter((num) => num % 2 === 0));
    //output: "Even number: 2", "Even number: 4"
    const subscribe2 = example2.subscribe((val) =>
      console.log(`Even number: ${val}`)
    );
  }
}
