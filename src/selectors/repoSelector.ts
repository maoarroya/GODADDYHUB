import { useAppSelector } from '../hooks/useAppDispatchAndSelector';
import type { RootState } from '../store';
import type { Repo } from '../types';

export const repoSelector = (name: string) =>
  useAppSelector((state: RootState) => {
    const repos =
      (state.githubApi.queries['getOrgRepos("godaddy")']?.data as Repo[]) ?? [];
    return repos.find((r) => r.name === name);
  });
