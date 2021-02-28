import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IssueDetailsComponent } from "./components/issue-details.component";

const routes: Routes = [
    {
        path: '',
        component: IssueDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class IssueDetailsRoutingModule {

}