import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CreatorService } from "../creator.service";
@Component({
    selector:'app-create',
    templateUrl: './create-new.component.html',
    styleUrls: ['./create-new.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class CreateNew implements OnInit{
    public currentStep: number = 1;

    constructor(private CreatorService:CreatorService){}
    ngOnInit(): void {
        // this.CreatorService.$form1Value.subscribe((val)=>{
        //     console.log(val,'val');
        //     if (val){
        //         this.currentStep = 2;
        //     }
        // });
    }
}