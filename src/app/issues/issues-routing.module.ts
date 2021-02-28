import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IssuesComponent } from "./components/issues/issues.component";

const routes: Routes = [
    {
        path: '',
        component: IssuesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class IssuesRoutingModule {

}