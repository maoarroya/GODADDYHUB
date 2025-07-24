import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Repo } from '../types';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getOrgRepos: builder.query<Repo[], string>({
      query: (org) => `orgs/${org}/repos`,
    }),
  }),
});

export const { useGetOrgReposQuery } = githubApi;
