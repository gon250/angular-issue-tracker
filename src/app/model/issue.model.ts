export interface Issue {
    url:                      string;
    repository_url:           string;
    labels_url:               string;
    comments_url:             string;
    events_url:               string;
    html_url:                 string;
    id:                       number;
    node_id:                  string;
    number:                   number;
    title:                    string;
    user:                     User;
    labels:                   Label[];
    state:                    string;
    locked:                   boolean;
    assignee:                 User | null;
    assignees:                User[];
    milestone:                Milestone | null;
    comments:                 number;
    created_at:               Date;
    updated_at:               Date;
    closed_at:                null;
    author_association:       string;
    active_lock_reason:       null;
    body:                     string;
    performed_via_github_app: null;
    pull_request?:            PullRequest;
}

export interface User {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
}

export interface Label {
    id:          number;
    node_id:     string;
    url:         string;
    name:        string;
    color:       string;
    default:     boolean;
    description: null | string;
}

export interface Milestone {
    url:           string;
    html_url:      string;
    labels_url:    string;
    id:            number;
    node_id:       string;
    number:        number;
    title:         string;
    description:   string;
    creator:       User;
    open_issues:   number;
    closed_issues: number;
    state:         string;
    created_at:    Date;
    updated_at:    Date;
    due_on:        null;
    closed_at:     null;
}

export interface PullRequest {
    url:       string;
    html_url:  string;
    diff_url:  string;
    patch_url: string;
}
