import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "../shared.module";

const route:Route[] = [
    {path:'',component:AdminComponent}
]
@NgModule({
    declarations:[AdminComponent],
    imports:[SharedModule,RouterModule.forChild(route)]
})
export class AdminModule{

}