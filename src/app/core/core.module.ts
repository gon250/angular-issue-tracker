import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesService } from './services/issues/issues.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    IssuesService
  ]
})
export class CoreModule { }
