import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    //private elementRef:ElementRef
    ) 
    {
    //console.log(this.elementRef)
    //this.elementRef.nativeElement.style.backgroundColor = 'lightblue'
      //this._renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue')
   }

}
