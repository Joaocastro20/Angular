import { Injectable } from "@angular/core";


@Injectable()
export class cService{

    array:string[] = ['um','dois','tres','quatro','cinco']

    getString(){
        return this.array;
    }
    addNewElement(elemento:string){
        this.array.push(elemento)
    }

}