import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-from2',
    templateUrl: './form2.component.html',
    styleUrls: ['./form2.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class FormTwo implements OnInit{
    step2Form!:FormGroup;
    radiooptions = ['MCQ', 'MSQ', 'Fill In the Blanks'];
    public checkoptions = ['Text', 'Image'];
    imagePreviews: { [key: string]: string | ArrayBuffer | null } = {};
    ngOnInit(): void {
        this.step2Form = new FormGroup({
            type: new FormControl('MCQ',Validators.required),
            format: new FormGroup({
                text:new FormControl(true,Validators.required),
                image:new FormControl(false,Validators.required),
            }),
            questionImage:new FormControl(null)
        })

        this.step2Form.get('format.image')?.valueChanges.subscribe((val)=>{
            const questionImage = this.returnControl('questionImage');
            this.removeImage('questionImage');
            val?questionImage?.addValidators(Validators.required):questionImage?.removeValidators(Validators.required);
        })
    }
    submit(){
        const form = new FormData();
        Object.keys(this.step2Form).forEach(control=>{
            form.append(control,this.step2Form.get(control)?.value);
        })
        console.log('form',form)
    }
    onFilechange(event:Event,contorlName:string){
        const file = (<HTMLInputElement>event.target).files?.[0];
        const control = this.step2Form.get(contorlName);
        if(file){
            control?.setValue(file);
            control?.markAsTouched()
            const reader = new FileReader()
            reader.onload = ()=>{
                this.imagePreviews[contorlName] = reader.result;
            }
            reader.readAsDataURL(file)
        }
    }
    removeImage(controlName:string,inputEL?:HTMLInputElement){
        const control = this.step2Form.get(controlName);
        control?.setValue(null);
        delete this.imagePreviews[controlName]
        if(inputEL) inputEL.value='';
    }

    returnControl(controlName:string):AbstractControl<any>|null{
        return this.step2Form.get(controlName);
    }
}