import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";
import { IssuesComponent } from "./components/issues/issues.component";
import { IssuesRoutingModule } from "./issues-routing.module";

@NgModule({
    declarations: [
        IssuesComponent
    ],
    imports: [
        CommonModule,
        IssuesRoutingModule,
        MaterialModule
    ]
})
export class IssuesModule {

}