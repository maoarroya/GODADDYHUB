import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Repo } from '../types';
import { HOST } from '../constants';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: HOST }),
  endpoints: (builder) => ({
    getOrgRepos: builder.query<Repo[], string>({
      query: (org) => `orgs/${org}/repos`,
    }),
    getRepoLanguages: builder.query<Record<string, number>, string>({
      query: (languagesUrl) => ({ url: languagesUrl, baseUrl: '' }),
    }),
  }),
});

export const { useGetOrgReposQuery, useGetRepoLanguagesQuery } = githubApi;
