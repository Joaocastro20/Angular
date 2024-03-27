import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { Products } from '../product-create/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  lstProducts?: Products[]
  displayedColumns: string[] = ["id", "name", "price"];
  dataSource: any;
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.listarRegistros()
  }

  protected listarRegistros(){
    this.service.listar().subscribe(
      (res) =>{
        this.dataSource = new MatTableDataSource<Products>(res)
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
      } 
    )
  }

}
