import { HttpClient } from "@angular/common/http";
import { delay, take } from "rxjs";


export class CrudService<T>{


    constructor(
        protected http: HttpClient,
        private API_URL:string
        ){}

    list(){
        return this.http.get<T[]>(this.API_URL)
        .pipe(
          delay(1000)
        );
      }
      loadById(id:any){
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
      }
      create(record:T){
        return this.http.post(this.API_URL, record).pipe(take(1));
      }
      update(record:any){
        return this.http.put(`${this.API_URL}/${record['id']}`,record).pipe(take(1));
      }
      delete(recordId:number){
        return this.http.delete(`${this.API_URL}/${recordId}`).pipe(take(1));
      }
}