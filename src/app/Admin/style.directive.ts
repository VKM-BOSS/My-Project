
import { Directive,ElementRef,Renderer2,OnInit, HostListener,HostBinding,Input,OnChanges, SimpleChanges } from "@angular/core"

@Directive({
    selector:'[appStyle]'
})

export class BasicStyle implements OnChanges{
    constructor(private element:ElementRef,private renderer:Renderer2){
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.bgcolor = changes['bg'].currentValue
        this.textcolor = changes['color'].currentValue;
    }

    @HostListener('mouseenter') hover(){
        this.renderer.setStyle(this.element.nativeElement,'color','blue');
    }
    @HostListener('mouseleave') leave(){
        this.renderer.setStyle(this.element.nativeElement,'color','black');
    }



    @Input() bg:string='';
    @Input() color:string='';

    @HostBinding('style.backgroundColor') bgcolor = this.bg;
    @HostBinding('style.color') textcolor = this.color;
}