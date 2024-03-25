import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {



  constructor(public service: ProductServiceService) { }

  ngOnInit(): void {
    this.criarForm()
    
  }

  private criarForm(){
    this.service.teste()
  }
}
