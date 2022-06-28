import { Directive ,HostListener,ElementRef,Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this.renderer.setStyle(this.elementRef.nativeElement,
      //'backgroundColor','lightblue')
      this.backgroundColor = 'lightblue'
  }

  @HostListener('mouseleave') onMouseOverLeave(){
    //this.renderer.setStyle(this.elementRef.nativeElement,
      //'backgroundColor','white')
      this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string ='';

  constructor(
    //private elementRef:ElementRef,
    //private renderer:Renderer2
    ) {
    //console.log(elementRef)
   }

}
