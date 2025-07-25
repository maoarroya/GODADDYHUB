import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepoListPage from './RepoListPage';
import * as githubApi from '../../services/githubApi';
import { mockRepos } from '../../__mocks__/mockRepo';

jest.mock('../../services/githubApi');

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
    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    expect(screen.getByText('ui-component-library')).toBeInTheDocument();

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
