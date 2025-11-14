import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CreateNew } from "./create-new/create-new.component";
import { CreateList } from "./create-list/create-list.component";

const route: Route[] = [
    {
        path: '', children: [
            { path: 'new', component: CreateNew },
            { path: 'list', component: CreateList }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class CreatorRouter {

}