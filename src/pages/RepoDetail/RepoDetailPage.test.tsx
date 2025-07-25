import { render, screen } from '@testing-library/react';
import RepoDetailPage from './RepoDetailPage';
import * as githubApi from '../../services/githubApi';
import * as selectors from '../../selectors/repoSelector';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { mockRepos } from '../../__mocks__/mockRepo';

let mockNavigate: jest.Mock;
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});
jest.mock('../../services/githubApi', () => {
  const actual = jest.requireActual('../../services/githubApi');
  return {
    ...actual,
    useGetRepoLanguagesQuery: jest.fn(),
  };
});
jest.mock('../../components/languagesComponent', () => () => <div data-testid="languages-component" />);
jest.mock('../../components/repoInfoItem', () => ({ __esModule: true, default: ({ value }: { value: number }) => <div data-testid="repo-info-item">{value}</div> }));
jest.mock('../../components/pageHeader', () => ({ __esModule: true, default: ({ title }: { title: string }) => <div data-testid="page-header">{title}</div> }));


describe('RepoDetailPage', () => {
  beforeEach(() => {
    mockNavigate = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('redirects if repo is not found', () => {
    jest.spyOn(selectors, 'repoSelector').mockReturnValue(undefined);
    (githubApi.useGetRepoLanguagesQuery as jest.Mock).mockReturnValue({});
    render(
      <Provider store={store}>
        <RepoDetailPage />
      </Provider>
    );
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });
  });

  it('shows loading state for languages', () => {
    jest.spyOn(selectors, 'repoSelector').mockReturnValue(mockRepos[0]);
    (githubApi.useGetRepoLanguagesQuery as jest.Mock).mockReturnValue({ isLoading: true });
    render(
      <Provider store={store}>
        <RepoDetailPage />
      </Provider>
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows error state for languages', () => {
    jest.spyOn(selectors, 'repoSelector').mockReturnValue(mockRepos[0]);
    (githubApi.useGetRepoLanguagesQuery as jest.Mock).mockReturnValue({ isError: true });
    render(
      <Provider store={store}>
        <RepoDetailPage />
      </Provider>
    );
    expect(screen.getByText(/error loading languages/i)).toBeInTheDocument();
  });

  it('renders repo details and languages', () => {
    jest.spyOn(selectors, 'repoSelector').mockReturnValue(mockRepos[0]);
    (githubApi.useGetRepoLanguagesQuery as jest.Mock).mockReturnValue({ data: { TypeScript: 100 }, isLoading: false, isError: false });
    render(
      <Provider store={store}>
        <RepoDetailPage />
      </Provider>
    );
    expect(screen.getByText('redis-optimization')).toBeInTheDocument();
    expect(screen.getByText('A set of utilities to optimize Redis queries')).toBeInTheDocument();
    expect(screen.getByTestId('languages-component')).toBeInTheDocument();
    expect(screen.getByTestId('page-header')).toHaveTextContent('GoDaddyHub');
    expect(screen.getAllByTestId('repo-info-item').length).toBeGreaterThan(0);
  });
}); 