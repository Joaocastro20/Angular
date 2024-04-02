import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implementations',
  templateUrl: './implementations.component.html',
  styleUrls: ['./implementations.component.css']
})
export class ImplementationsComponent implements OnInit {
  isChecked?: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
