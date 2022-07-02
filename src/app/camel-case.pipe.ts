import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ')
    let result = ''

    for (let v of values){
      result += this.firtUp(v) + ' '
    }

    return result;
  }
  firtUp(value: string){
    return value.substring(0,1).toUpperCase()+value.substring(1).toLowerCase()
    
  }

}
