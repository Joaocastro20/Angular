import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { Products } from '../product-create/product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  lstProducts?: Products[]

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.listarRegistros()
  }

  protected listarRegistros(){
    this.service.listar().subscribe(
      (res) => this.lstProducts = res
    )
  }

}
