import { NgModule } from "@angular/core";
import { SearchPipe } from "./pipes/search.pipe";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PipeAsync } from "./pipes/async-search.pipe";
import { BasicStyle } from "./Admin/style.directive";
import { structureDir } from "./Admin/structure.directive";

@NgModule({
    declarations:[SearchPipe,PipeAsync,BasicStyle,structureDir],
    exports:[CommonModule,ReactiveFormsModule,FormsModule,SearchPipe,PipeAsync,BasicStyle,structureDir]
})

export class SharedModule{

}