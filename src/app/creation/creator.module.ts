import { NgModule } from "@angular/core";
import { CreateNew } from "./create-new/create-new.component";
import { FormOne } from "./create-new/form1/form1.component";
import { FormTwo } from "./create-new/form2/form2.component";
import { CreateList } from "./create-list/create-list.component";
import { CreatorRouter } from "./creator.router";
import { SharedModule } from "../shared.module";
@NgModule({
    declarations:[CreateNew,FormOne,FormTwo,CreateList],
    imports:[CreatorRouter,SharedModule]
})

export class createrModule{}