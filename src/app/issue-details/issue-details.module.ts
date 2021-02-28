import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { IssueDetailsComponent } from './components/issue-details.component';
import { IssueDetailsRoutingModule } from './issue-details-routing.module';

@NgModule({
  declarations: [
    IssueDetailsComponent
  ],
  imports: [
    CommonModule,
    IssueDetailsRoutingModule,
    MaterialModule
  ]
})
export class IssueDetailsModule { }
