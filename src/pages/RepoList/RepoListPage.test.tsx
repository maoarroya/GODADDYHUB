import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepoListPage from './RepoListPage';
import * as githubApi from '../../services/githubApi';
import type { Repo } from '../../types';

jest.mock('../../services/githubApi');

const mockRepos: Repo[] = [
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
  },
];

describe('RepoListPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    (githubApi.useGetOrgReposQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    render(
      <MemoryRouter>
        <RepoListPage />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });

  it('renders error state', () => {
    (githubApi.useGetOrgReposQuery as jest.Mock).mockReturnValue({
      isError: true,
    });
    render(
      <MemoryRouter>
        <RepoListPage />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });

  it('renders a list of repositories', () => {
    (githubApi.useGetOrgReposQuery as jest.Mock).mockReturnValue({
      data: mockRepos,
      isLoading: false,
      isError: false,
    });
    render(
      <MemoryRouter>
        <RepoListPage />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('page-title')).toHaveTextContent('GoDaddyHub');
    expect(screen.getAllByTestId('repo-card')).toHaveLength(mockRepos.length);
    expect(screen.getByText('redis-optimization')).toBeInTheDocument();
    expect(screen.getByText('ui-component-library')).toBeInTheDocument();
  });

  it('renders repository details correctly', () => {
    (githubApi.useGetOrgReposQuery as jest.Mock).mockReturnValue({
      data: mockRepos,
      isLoading: false,
      isError: false,
    });

    render(
      <MemoryRouter>
        <RepoListPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('redis-optimization')).toBeInTheDocument();
    expect(
      screen.getByText('A set of utilities to optimize Redis queries'),
    ).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    expect(screen.getByText('ui-component-library')).toBeInTheDocument();
    expect(
      screen.getByText('Reusable UI components built with React and MUI'),
    ).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('renders fallback when no repositories are found', () => {
    (githubApi.useGetOrgReposQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    });

    render(
      <MemoryRouter>
        <RepoListPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/no repositories found/i)).toBeInTheDocument();
  });
});
