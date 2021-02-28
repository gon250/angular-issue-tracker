import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { IssuesService } from './issues.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('IssuesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests getAllIssues', () => {
    it('should return issues', () => {
      const expectedData = [
        {
          url: 'https://api.github.com/repos/angular/angular/issues/41032',
          repository_url: 'https://api.github.com/repos/angular/angular',
          labels_url:
            'https://api.github.com/repos/angular/angular/issues/41032/labels{/name}',
          comments_url:
            'https://api.github.com/repos/angular/angular/issues/41032/comments',
          events_url:
            'https://api.github.com/repos/angular/angular/issues/41032/events',
          html_url: 'https://github.com/angular/angular/issues/41032',
          id: 818139325,
          node_id: 'MDU6SXNzdWU4MTgxMzkzMjU=',
          number: 41032,
          title:
            'VSCode Angular language-service mark template errors in TypeScript file',
          user: {
            login: 'netdjw',
            id: 2706171,
            node_id: 'MDQ6VXNlcjI3MDYxNzE=',
            avatar_url: 'https://avatars.githubusercontent.com/u/2706171?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/netdjw',
            html_url: 'https://github.com/netdjw',
            followers_url: 'https://api.github.com/users/netdjw/followers',
            following_url:
              'https://api.github.com/users/netdjw/following{/other_user}',
            gists_url: 'https://api.github.com/users/netdjw/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/netdjw/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/netdjw/subscriptions',
            organizations_url: 'https://api.github.com/users/netdjw/orgs',
            repos_url: 'https://api.github.com/users/netdjw/repos',
            events_url: 'https://api.github.com/users/netdjw/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/netdjw/received_events',
            type: 'User',
            site_admin: false,
          },
          labels: [],
          state: 'open',
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 1,
          created_at: '2021-02-28T06:59:16Z',
          updated_at: '2021-02-28T07:55:43Z',
          closed_at: null,
          author_association: 'NONE',
          active_lock_reason: null,
          body:
            "# 🐞 bug report\r\n\r\n### Affected Package\r\nThe issue is caused by package @angular/language-service\r\n\r\n\r\n### Is this a regression?\r\n\r\nI don't know, the issue has been present for some time.\r\n\r\n\r\n### Description\r\n\r\nWhen I open typescrtipt files I see  these errors:\r\n\r\n![image](https://user-images.githubusercontent.com/2706171/109410314-e2629200-7999-11eb-8939-59d72ec53d89.png)\r\n\r\n![image](https://user-images.githubusercontent.com/2706171/109410291-b34c2080-7999-11eb-92b6-5115a25b83bf.png)\r\n\r\nBoth errors should be present in the HTML template, not in the TypeScript code, and it's very annoying.\r\n\r\n\r\n## 🔬 Minimal Reproduction\r\n\r\nI tried to create a reprodction, but it came out of unknown reason. If I copy-paste my codes to StackBlitz the issue isn't shown.\r\n\r\nInstead of this I shared some printscreens above.\r\n\r\n\r\n## 🔥 Exception or Error\r\n\r\nSee above on printscreens.\r\n\r\n\r\n## 🌍  Your Environment\r\n\r\n**Angular Version:**\r\n<pre><code>\r\nAngular CLI: 6.0.8\r\nNode: 12.15.0\r\nOS: win32 x64\r\nAngular: 6.1.10\r\n... core\r\n\r\nPackage                             Version\r\n-------------------------------------------------------------\r\n@angular-devkit/architect           0.6.8\r\n@angular-devkit/build-angular       0.6.8\r\n@angular-devkit/build-optimizer     0.6.8\r\n@angular-devkit/core                0.6.8\r\n@angular-devkit/schematics          0.6.8\r\n@angular/animations                 6.1.9\r\n@angular/cdk                        6.4.7\r\n@angular/cli                        6.0.8\r\n@angular/common                     6.1.9\r\n@angular/compiler                   6.1.9\r\n@angular/compiler-cli               6.1.9\r\n@angular/forms                      6.1.9\r\n@angular/http                       6.1.9\r\n@angular/language-service           6.1.9\r\n@angular/material                   6.4.7\r\n@angular/platform-browser           6.1.9\r\n@angular/platform-browser-dynamic   6.1.9\r\n@angular/platform-server            6.1.9\r\n@angular/router                     6.1.9\r\n@ngtools/webpack                    6.0.8\r\n@schematics/angular                 0.6.8\r\n@schematics/update                  0.6.8\r\nrxjs                                6.2.2\r\ntypescript                          2.7.2\r\nwebpack                             4.8.3\r\n</code></pre>\r\n\r\n**Anything else relevant?**\r\n\r\n<pre>\r\n<code>\r\ncode -v\r\n1.53.2\r\n622cb03f7e070a9670c94bae1a45d78d7181fbd4\r\nx64\r\n</code>\r\n</pre>\r\n\r\n<pre><code>\r\nAngular Language Service version v11.2.3\r\n</code></pre>\r\n\r\n\r\n<pre><code>\r\nOp.sys: Windows 10 Home\r\n</code></pre>\r\n\r\n",
          performed_via_github_app: null,
        },
        {
          url: 'https://api.github.com/repos/angular/angular/issues/41031',
          repository_url: 'https://api.github.com/repos/angular/angular',
          labels_url:
            'https://api.github.com/repos/angular/angular/issues/41031/labels{/name}',
          comments_url:
            'https://api.github.com/repos/angular/angular/issues/41031/comments',
          events_url:
            'https://api.github.com/repos/angular/angular/issues/41031/events',
          html_url: 'https://github.com/angular/angular/pull/41031',
          id: 818032944,
          node_id: 'MDExOlB1bGxSZXF1ZXN0NTgxNDA1OTMw',
          number: 41031,
          title: 'docs: clarify Observable use-case in tohpt4',
          user: {
            login: 'AlexejTimonin',
            id: 8479582,
            node_id: 'MDQ6VXNlcjg0Nzk1ODI=',
            avatar_url: 'https://avatars.githubusercontent.com/u/8479582?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/AlexejTimonin',
            html_url: 'https://github.com/AlexejTimonin',
            followers_url:
              'https://api.github.com/users/AlexejTimonin/followers',
            following_url:
              'https://api.github.com/users/AlexejTimonin/following{/other_user}',
            gists_url:
              'https://api.github.com/users/AlexejTimonin/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/AlexejTimonin/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/AlexejTimonin/subscriptions',
            organizations_url:
              'https://api.github.com/users/AlexejTimonin/orgs',
            repos_url: 'https://api.github.com/users/AlexejTimonin/repos',
            events_url:
              'https://api.github.com/users/AlexejTimonin/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/AlexejTimonin/received_events',
            type: 'User',
            site_admin: false,
          },
          labels: [
            {
              id: 149476251,
              node_id: 'MDU6TGFiZWwxNDk0NzYyNTE=',
              url:
                'https://api.github.com/repos/angular/angular/labels/cla:%20yes',
              name: 'cla: yes',
              color: '009800',
              default: false,
              description: null,
            },
          ],
          state: 'open',
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 2,
          created_at: '2021-02-27T21:35:28Z',
          updated_at: '2021-02-27T21:37:37Z',
          closed_at: null,
          author_association: 'NONE',
          active_lock_reason: null,
          pull_request: {
            url: 'https://api.github.com/repos/angular/angular/pulls/41031',
            html_url: 'https://github.com/angular/angular/pull/41031',
            diff_url: 'https://github.com/angular/angular/pull/41031.diff',
            patch_url: 'https://github.com/angular/angular/pull/41031.patch',
          },
          body:
            '## PR Checklist\r\nPlease check if your PR fulfills the following requirements:\r\n\r\n- [x] The commit message follows our guidelines: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit\r\n- [x] Tests for the changes have been added (for bug fixes / features)\r\n- [x] Docs have been added / updated (for bug fixes / features)\r\n\r\n\r\n## PR Type\r\nWhat kind of change does this PR introduce?\r\n\r\n<!-- Please check the one that applies to this PR using "x". -->\r\n\r\n- [ ] Bugfix\r\n- [ ] Feature\r\n- [ ] Code style update (formatting, local variables)\r\n- [ ] Refactoring (no functional changes, no api changes)\r\n- [ ] Build related changes\r\n- [ ] CI related changes\r\n- [x] Documentation content changes\r\n- [ ] angular.io application / infrastructure changes\r\n- [ ] Other... Please describe:\r\n\r\n\r\n## What is the current behavior?\r\n<!-- Please describe the current behavior that you are modifying, or link to a relevant issue. -->\r\nI\'m following the tutorial and got into block of text which got me slightly confused. I comprehended it\r\nas the browser will **not** block when doing synchronous HTTP call, but it blocks doesn\'t it?\r\n\r\n## What is the new behavior?\r\nClarified that the browser will block during synchronous HTTP call.\r\n\r\n## Does this PR introduce a breaking change?\r\n\r\n- [ ] Yes\r\n- [x] No\r\n\r\n\r\n<!-- If this PR contains a breaking change, please describe the impact and migration path for existing applications below. -->\r\n\r\n\r\n## Other information\r\n',
          performed_via_github_app: null,
        },
      ];

      let dataError, dataResponse;
      service.getAllIssues('1').subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );

      const request = httpTestingController.expectOne('https://api.github.com/repos/angular/angular/issues?per_page=15&page=1');
      request.flush(expectedData);
      expect(dataResponse.length).toEqual(2);
      expect(request.request.method).toEqual('GET');
      expect(dataError).toBe(undefined);
    });
  });

    describe('tests getIssueByNumber', () => {
    it('should return an issues', () => {
      const expectedData = {
          url: 'https://api.github.com/repos/angular/angular/issues/41031',
          repository_url: 'https://api.github.com/repos/angular/angular',
          labels_url:
            'https://api.github.com/repos/angular/angular/issues/41031/labels{/name}',
          comments_url:
            'https://api.github.com/repos/angular/angular/issues/41031/comments',
          events_url:
            'https://api.github.com/repos/angular/angular/issues/41031/events',
          html_url: 'https://github.com/angular/angular/pull/41031',
          id: 818032944,
          node_id: 'MDExOlB1bGxSZXF1ZXN0NTgxNDA1OTMw',
          number: 41031,
          title: 'docs: clarify Observable use-case in tohpt4',
          user: {
            login: 'AlexejTimonin',
            id: 8479582,
            node_id: 'MDQ6VXNlcjg0Nzk1ODI=',
            avatar_url: 'https://avatars.githubusercontent.com/u/8479582?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/AlexejTimonin',
            html_url: 'https://github.com/AlexejTimonin',
            followers_url:
              'https://api.github.com/users/AlexejTimonin/followers',
            following_url:
              'https://api.github.com/users/AlexejTimonin/following{/other_user}',
            gists_url:
              'https://api.github.com/users/AlexejTimonin/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/AlexejTimonin/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/AlexejTimonin/subscriptions',
            organizations_url:
              'https://api.github.com/users/AlexejTimonin/orgs',
            repos_url: 'https://api.github.com/users/AlexejTimonin/repos',
            events_url:
              'https://api.github.com/users/AlexejTimonin/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/AlexejTimonin/received_events',
            type: 'User',
            site_admin: false,
          },
          labels: [
            {
              id: 149476251,
              node_id: 'MDU6TGFiZWwxNDk0NzYyNTE=',
              url:
                'https://api.github.com/repos/angular/angular/labels/cla:%20yes',
              name: 'cla: yes',
              color: '009800',
              default: false,
              description: null,
            },
          ],
          state: 'open',
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 2,
          created_at: '2021-02-27T21:35:28Z',
          updated_at: '2021-02-27T21:37:37Z',
          closed_at: null,
          author_association: 'NONE',
          active_lock_reason: null,
          pull_request: {
            url: 'https://api.github.com/repos/angular/angular/pulls/41031',
            html_url: 'https://github.com/angular/angular/pull/41031',
            diff_url: 'https://github.com/angular/angular/pull/41031.diff',
            patch_url: 'https://github.com/angular/angular/pull/41031.patch',
          },
          body:
            '## PR Checklist\r\nPlease check if your PR fulfills the following requirements:\r\n\r\n- [x] The commit message follows our guidelines: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit\r\n- [x] Tests for the changes have been added (for bug fixes / features)\r\n- [x] Docs have been added / updated (for bug fixes / features)\r\n\r\n\r\n## PR Type\r\nWhat kind of change does this PR introduce?\r\n\r\n<!-- Please check the one that applies to this PR using "x". -->\r\n\r\n- [ ] Bugfix\r\n- [ ] Feature\r\n- [ ] Code style update (formatting, local variables)\r\n- [ ] Refactoring (no functional changes, no api changes)\r\n- [ ] Build related changes\r\n- [ ] CI related changes\r\n- [x] Documentation content changes\r\n- [ ] angular.io application / infrastructure changes\r\n- [ ] Other... Please describe:\r\n\r\n\r\n## What is the current behavior?\r\n<!-- Please describe the current behavior that you are modifying, or link to a relevant issue. -->\r\nI\'m following the tutorial and got into block of text which got me slightly confused. I comprehended it\r\nas the browser will **not** block when doing synchronous HTTP call, but it blocks doesn\'t it?\r\n\r\n## What is the new behavior?\r\nClarified that the browser will block during synchronous HTTP call.\r\n\r\n## Does this PR introduce a breaking change?\r\n\r\n- [ ] Yes\r\n- [x] No\r\n\r\n\r\n<!-- If this PR contains a breaking change, please describe the impact and migration path for existing applications below. -->\r\n\r\n\r\n## Other information\r\n',
          performed_via_github_app: null,
        };

      let dataError, dataResponse;
      service.getIssue('41031').subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );

      const request = httpTestingController.expectOne('https://api.github.com/repos/angular/angular/issues/41031');
      request.flush(expectedData);
      expect(dataResponse.number).toEqual(41031);
      expect(request.request.method).toEqual('GET');
      expect(dataError).toBe(undefined);
    });
  });
});
