import type { Repo } from '../types';

export const mockRepos: Repo[] = [
  {
    id: 1,
    name: 'redis-optimization',
    description: 'A set of utilities to optimize Redis queries',
    language: 'TypeScript',
    forks_count: 10,
    open_issues_count: 2,
    watchers_count: 42,
    html_url: 'https://github.com/godaddy/redis-optimization',
    stargazers_count: 5,
    languages_url: 'https://api.github.com/repos/godaddy/redis-optimization/languages',
  },
  {
    id: 2,
    name: 'ui-component-library',
    description: 'Reusable UI components built with React and MUI',
    language: 'JavaScript',
    forks_count: 5,
    open_issues_count: 0,
    watchers_count: 17,
    html_url: 'https://github.com/godaddy/ui-component-library',
    stargazers_count: 10,
    languages_url: 'https://api.github.com/repos/godaddy/ui-component-library/languages',
  },
];
