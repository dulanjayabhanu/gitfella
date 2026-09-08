# Contributing to Gitfella

Thank you for considering contributing to Gitfella. This document outlines the process for reporting issues, suggesting features, and submitting changes.

## Before You Start

Please search existing issues before opening a new one, to avoid duplicates. For anything beyond a small fix, opening an issue first to discuss the change is appreciated before submitting a pull request.

## Reporting Bugs

Use the Bug Report issue template. Include clear steps to reproduce the problem, what you expected to happen, and what actually happened. Screenshots are helpful for UI related issues.

## Suggesting Features

Use the Feature Request issue template. Explain the problem the feature would solve and, if possible, how you imagine it working.

## Development Setup

```bash
git clone https://github.com/dulanjayabhanu/gitfella.git
cd gitfella
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## Making Changes

1. Fork the repository and create a new branch from `main` for your change.
2. Make your changes, following the existing code style and project structure.
3. Keep changes focused on a single concern. Avoid combining unrelated fixes or features in one pull request.
4. Run the following before committing:
```bash
   npm run lint
   npm run typecheck
   npm run format
```
5. Test your changes locally to confirm they work as expected.

## Commit Messages

Write clear, descriptive commit messages that explain what changed and why, not just what files were touched.

## Submitting a Pull Request

1. Push your branch and open a pull request against `main`.
2. Fill out the pull request template completely.
3. Link any related issue in the pull request description.
4. Be responsive to feedback during review. Changes may be requested before a pull request is merged.

## Code Style

This project uses ESLint and Prettier to maintain consistent code style. Run `npm run lint` and `npm run format` before submitting changes. Please follow the existing patterns used throughout the codebase, particularly around component structure, hooks, and data fetching with TanStack Query.

## Code of Conduct

By participating in this project, you agree to follow the project's [Code of Conduct](./CODE_OF_CONDUCT.md).

## Questions

For general questions that are not bugs or feature requests, please use GitHub Discussions rather than the issue tracker.