import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { IssuesService } from 'src/app/core/services/issues/issues.service';
import { Issue } from 'src/app/model/issue.model';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {

  issue: Issue;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private issuesService: IssuesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchIssue(params.id)
    });
  }

  fetchIssue(id: string) {
    this.issuesService.getIssue(id.toString()).subscribe((issue) => {
      this.issue = issue;
      this.loading = false;
      this.error = '';
    }, (error) => {
      console.log({error})
      this.error = 'There was an error while your requests, pls try again later.'
      this.loading = false;
    });
  }
  
  backClicked() {
    this.location.back();
  }

}
