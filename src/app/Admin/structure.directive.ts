import { Directive,Input,TemplateRef,ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[struct]'
})
export class structureDir{
    constructor(private temp:TemplateRef<any>,private view:ViewContainerRef){}

    @Input() set struct(cond:boolean){
        if(cond){
            this.view.createEmbeddedView(this.temp)
        }
        else{
            this.view.clear();
        }
    }
}