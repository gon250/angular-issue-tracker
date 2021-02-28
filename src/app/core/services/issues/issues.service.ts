/**
 * API ref
 * https://docs.github.com/en/rest/reference/issues
 */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Issue } from 'src/app/model/issue.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private readonly retryAttemps: number = 2;
  private readonly itemsPerPage: string = '15';

  constructor(private http: HttpClient) {}

  getAllIssues(page: string): Observable<Issue[]> {
    return this.http
      .get<Issue[]>(environment.url_api, {
        params: { per_page: this.itemsPerPage, page: page },
      })
      .pipe(retry(this.retryAttemps), catchError(this.handleError));
  }

  getIssue(issueNumber: string): Observable<Issue> {
    return this.http
      .get<Issue>(`${environment.url_api}/${issueNumber}`)
      .pipe(retry(this.retryAttemps), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Tracking error', { error });
    return throwError('There was an error while requesting the data.');
  }
}
