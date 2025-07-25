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
- Implemented a repo list page with RepoCard and Badge components to display key repository information.

- Built a repo detail view (RepoDetailPage) that fetches language data dynamically using RTK Query.

- Created modular, reusable components (e.g., RepoInfoItem, GithubButton, PageHeader) to promote clean and DRY code.

- Added semantic commit conventions for clarity and future automation with CI/CD tools like Semantic Release.

- Set up Redux Toolkit and RTK Query for scalable, normalized data fetching and state management.

- Integrated Jest with a sample test to establish a foundation for unit testing.

- Configured Material UI with a custom theme for consistent styling across the app.

- Structured the app with folders like components/, hooks/, selectors/, and services/ to maintain separation of concerns.

Why I chose this stack
- RTK Query: Even for a small project, RTK Query makes handling API states (loading, error, success) clean and scalable without boilerplate.

- Vite: Offers a fast, modern dev experience with minimal configuration and no need for SSR in this case.

- Material UI: Speeds up development with a rich set of prebuilt, accessible components that are easy to theme and extend.

- Semantic commits: Improve collaboration, make changelogs and automation (like semantic-release) much easier.

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

Run tests

```bash
  npm run dev
```
