import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/product-service.service';
import { Products } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Products = {
    name: '',
    price: 0
  }

  constructor(
    public service: ProductServiceService
    ) { }

  ngOnInit(): void {
    this.criarForm()
    
  }

  private criarForm(){
    this.service.listar().subscribe((res) => console.log(res))
  }

  protected cadastrar(){
    this.service.cadastrar(this.product).subscribe(
      () => {
        this.service.showMsg('Produto cadastrado!')
        this.product.name = '';
        this.product.price = 0
      }
      )
    
    
  }
}
