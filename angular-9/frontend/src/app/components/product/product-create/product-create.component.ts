import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/product-service.service';
import { Products } from './product.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Products = {
    name: '',
    price: ''
  }
  title = 'New Product'

  constructor(
    public service: ProductServiceService,
    public router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // const obj = this.route.snapshot.paramMap.get("name")
    // console.log(obj)
    if(this.route.snapshot.paramMap.get("id"))
    this.loadUpdate()
  }

  // private criarForm(){
  //   this.service.listar().subscribe((res) => console.log(res))
  // }

  protected loadUpdate(){
    this.title = 'Edit Product'
    this.product.name = this.route.snapshot.paramMap.get("name")
    this.product.price = this.route.snapshot.paramMap.get("price") 
  }

  protected cadastrar(){
    this.service.cadastrar(this.product).subscribe(
      () => {
        this.service.showMsg('Produto cadastrado!')
        this.product.name = '';
        this.product.price = '0'
        this.voltar()
      },
      () =>{
        this.service.showMsg('unavailable service!')
      }
      )
  }

  protected Editar(){
    this.service.update(this.product, this.route.snapshot.paramMap.get("id")).subscribe(() => {
      this.showMsg('altered sucess!')
      this.voltar()
    },
    () =>{
      this.service.showMsg('unavailable service!')
    })
  }

  protected showMsg(msg: string){
    this.service.showMsg(msg)
  }

  protected voltar(){
    this.router.navigate(['products'])
  }
}
