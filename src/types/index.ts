export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  html_url: string;
  stargazers_count: number;
  languages_url: string;
  license?: { spdx_id: string; name: string; url: string };
  updated_at?: string;
}

export type RepoLanguages = Record<string, number>;

export type LanguagePercent = { name: string; percent: number };
