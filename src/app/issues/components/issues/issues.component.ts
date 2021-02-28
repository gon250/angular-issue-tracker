import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/core/services/issues/issues.service';
import { Issue } from 'src/app/model/issue.model';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  
  issues: Issue[] = [];
  loading: boolean = true;
  error: string = '';
  issuePage: number = 1;

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.fetchIssues();
  }

  fetchIssues() {
    this.loading = true;
    this.issuesService.getAllIssues(String(this.issuePage)).subscribe((issues) => {
      this.issues = issues;
      this.loading = false;
      this.error = '';
    }, (error) => {
      console.log({error})
      this.error = 'There was an error while your requests, pls try again later.'
      this.loading = false;
      this.issues = [];
    });
  }

  nextPage() {
    this.issuePage = this.issuePage + 1
    this.fetchIssues()
  }

  prevPage() {
    this.issuePage = this.issuePage - 1
    this.fetchIssues()
  }

}
