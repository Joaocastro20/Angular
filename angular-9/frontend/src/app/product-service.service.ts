import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './components/product/product-create/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl = "http://localhost:3001/products"

  constructor(
    private snack: MatSnackBar,
    private http: HttpClient
    ) { }

   public showMsg(msg: string): void{
    this.snack.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  public listar(): Observable<Products[]>{
    return this.http.get<Products[]>(this.baseUrl)
  }

  public cadastrar(obj: Products): Observable<Products>{
    return this.http.post<Products>(this.baseUrl, obj)
  }
  
  public delete(obj: Products): Observable<any>{
    const url = `${this.baseUrl}/${obj.id}`;
    return this.http.delete(url)
  }

  public update(obj: Products, id: any){
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url,obj )
  }

}
