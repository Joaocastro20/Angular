import { EventEmitter, Injectable } from "@angular/core";
import { EventManager } from "@angular/platform-browser";


@Injectable()
export class cService{

    elementoCriado = new EventEmitter();

    array:string[] = ['um','dois','tres','quatro','cinco']

    getString(){
        return this.array;
    }
    addNewElement(elemento:string){
        this.array.push(elemento)
        this.elementoCriado.emit(elemento)
    }

}