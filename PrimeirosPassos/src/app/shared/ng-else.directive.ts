import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition:boolean){
    if(!condition){
      //this.view.createEmbeddedView(this.templateRef)
    }else{
      //this.view.clear()
    }
  }

  constructor(
    //private templateRef: TemplateRef<any>,
    //private view:ViewContainerRef
  ) { }

}
