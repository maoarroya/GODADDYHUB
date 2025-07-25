# GoDaddyHub

This project provides a simple interface to explore GoDaddy's public GitHub repositories. You can browse the list of repositories and view details such as description, primary language, forks, open issues, and watchers.

## Features

- Browse all public repositories from the GoDaddy GitHub organization
- View repository details including description, languages, forks, issues, and watchers
- Responsive layout and clean UI

## Tech Stack

- React
- TypeScript
- Material UI
- Redux Toolkit Query (RTK Query)
- React Router

##  My Contributions & Decisions

What I did
- Added semantic commit conventions for clarity and future automation with CI/CD tools like Semantic Release.
- Structured the app with folders like components/, hooks/, selectors/, services/ and routing to maintain separation of concerns. [#1](https://github.com/usuario/repositorio/pull/1)
- Configured Material UI with a custom theme for consistent styling across the app. [#2](https://github.com/usuario/repositorio/pull/2)
- Set up Redux Toolkit and RTK Query for scalable, normalized data fetching and state management. [#3](https://github.com/usuario/repositorio/pull/3)
- Integrated Jest with a sample test to establish a foundation for unit testing. [#4](https://github.com/usuario/repositorio/pull/4)
- Implemented a repo list page with RepoCard and Badge components to display key repository information. [#5](https://github.com/usuario/repositorio/pull/5)
- Built a repo detail view that fetches language data dynamically using RTK Query and modular, reusable components. [#6](https://github.com/usuario/repositorio/pull/6)
- E2E tests. [#7](https://github.com/usuario/repositorio/pull/7)
- Vercel deploy integration

Why I chose this stack
- RTK Query: Even for a small project, RTK Query makes handling API states (loading, error, success) clean and scalable without boilerplate.
- Vite: Offers a fast, modern dev experience with minimal configuration and no need for SSR in this case.
- Material UI: Speeds up development with a rich set of prebuilt, accessible components that are easy to theme and extend.
- Semantic commits: Improve collaboration, make changelogs and automation (like semantic-release) much easier.

## work to add or improve

- Enhance error handling to provide clearer and more user-friendly feedback.
- Implement an empty state message in the repository list for better UX when no data is available.
- Set up basic CI/CD jobs to automate testing and deployment.

## Getting started

Clone the repository:

```bash
git clone git@github.com:maoarroya/GODADDYHUB.git
cd GODADDYHUB
```

Install dependencies

```bash
  npm install
```

Run project

```bash
  npm run dev
```

Run unit tests

```bash
  npm run dev
```

Run e2e tests

```bash
  npm run test:e2e 
```
