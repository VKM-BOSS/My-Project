import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";

@Component({
    selector:'app-admin',
    templateUrl:'./admin.component.html',
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class AdminComponent implements OnInit{
    constructor(private cdr:ChangeDetectorRef,private zone:NgZone){}
    message:string='';
    ngOnInit(): void {
        setTimeout(()=>{
            this.message = 'Async Monkey Patch';
            // this.cdr.detectChanges();
            this.cdr.markForCheck();
        },2000)
        this.zone.run(()=>{
            console.log('Hi')
        })
    }
}