import { EventEmitter, Injectable } from "@angular/core";
import { EventManager } from "@angular/platform-browser";
import { LogService } from "../shared/log.service";

@Injectable()
export class cService{

    elementoCriado = new EventEmitter();

    array:string[] = ['um','dois','tres','quatro','cinco']

    constructor(private logService:LogService){

    }

    getString(){
        this.logService.deServicoPraServico('Obtendo Lista...')
        return this.array;
    }
    addNewElement(elemento:string){
        this.logService.deServicoPraServico(`Salvando item ${elemento} na lista..`)
        this.array.push(elemento)
        this.elementoCriado.emit(elemento)
    }

}