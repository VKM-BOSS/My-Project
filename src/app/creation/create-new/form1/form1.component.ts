import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { CreatorService } from "../../creator.service";

@Component({
    selector:'app-form1',
    templateUrl: './form1.component.html',
    styleUrls: ['./form1.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class FormOne implements OnInit {
    public typeOptions: string[] = ['Jee', 'Neet', 'IIT'];
    public classOptions: number[] = [10,12];
    public mediumOptions: any[] = ['Tamil','English'];
    public subjectOptions: any[] = [];
    public chapterOptions: any[] = [];
    public topicOptions: any[] = ['Topic1','Topic2'];
    public subtopicOptions: any[] = ['subTopic1','subTopic2'];
    public teams: any[] = ['Captain','IronMan'];
    public userRole?:string;

    step1Form!:FormGroup;

    constructor(private CreatorService:CreatorService){}

    ngOnInit(){
        this.userRole = 'HR';

        //setting up form
        this.step1Form = new FormGroup({
            type: new FormControl(null,Validators.required),
            class: new FormControl(null,Validators.required),
            medium: new FormControl(null,Validators.required),
            subject: new FormControl(null,Validators.required),
            chapter: new FormControl(null,Validators.required),
            topic: new FormControl(null,Validators.required),
            subTopic: new FormControl(null,Validators.required),
            team: new FormControl(null),
        })

        //setting subject null and subject options based on class selected
        this.step1Form.get('class')?.valueChanges.subscribe((val)=>{
            this.step1Form.get('subject')?.setValue(null);
            this.subjectOptions = val=='10'?['Science','Maths']:val=='12'?['Biology','Computer','Physics','Chemistry']:[];
        });

        //setting chapter null and chapter options based on subject selected
        this.step1Form.get('subject')?.valueChanges.subscribe((val)=>{
            this.step1Form.get('chapter')?.setValue(null);
            this.chapterOptions = val=='Science'?['Science Chapter 1','Science Chapter 2']:
            val=='Maths'?['Maths Chapter 1','Maths Chapter 2']:
            val=='Biology'?['Biology Chapter 1','Biology Chapter 2']:
            val=='Computer'?['Computer Chapter 1','Computer Chapter 2']:
            val=='Physics'?['Physics Chapter 1','Physics Chapter 2']:
            val=='Chemistry'?['Chemistry Chapter 1','Chemistry Chapter 2']:
            [];
        })

        //setting topic null
        this.step1Form.get('chapter')?.valueChanges.subscribe((val)=>this.step1Form.get('topic')?.setValue(null));

        //setting subtopic null
        this.step1Form.get('topic')?.valueChanges.subscribe((val)=>this.step1Form.get('subTopic')?.setValue(null));

        //adding removing validators
        this.step1Form.get('subTopic')?.valueChanges.subscribe((val)=>{
            const team = this.step1Form.get('team');
            team?.setValue(null);
            val=='subTopic1'?team?.addValidators(Validators.required):team?.removeValidators(Validators.required);
        })

    }

    isControlValid(contorl:string):boolean|undefined{
        return this.step1Form.get(contorl)?.invalid && this.step1Form.get(contorl)?.touched;
    }
    
    step1Submit(){
        console.log(this.step1Form.valid,'valid');
        // if(this.step1Form.valid){
        //     this.CreatorService.setForm1Value(this.step1Form.value)
        // }
    }

}