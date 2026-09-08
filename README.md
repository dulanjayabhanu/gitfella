# Gitfella

Gitfella is a web application that lets you check your GitHub followers and following, and quickly identify who follows you back, who doesn't, and who you're mutually connected with. It works entirely with GitHub's public API, so there is no sign in, no access tokens, and no account creation required.

<p align="center">
  <img src="/docs/images/gitfella-fellas-page.webp" alt="Gitfella Fellas page showing mutual GitHub connections" width="800">
</p>

<p align="center">
    <a href="https://gitfella.vercel.app" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Live_Demo-View_App-0a0a0a?style=for-the-badge&logo=vercel&logoColor=fafafa&labelColor=008236&color=09090b" alt="View Live Demo" />
    </a>
</p>

## Overview

Keeping track of your GitHub network manually is tedious, especially as your followers and following lists grow. Gitfella solves this by fetching your public GitHub data and organizing it into three clear categories:

- **Fans** : users who follow you, but you do not follow back
- **Not Following Back** : users you follow, but who do not follow you back
- **Fellas** : users who follow each other, a mutual connection

All of this is computed client side, directly in your browser, using data pulled from GitHub's public REST API.

## How It Works

1. Enter a GitHub username. Gitfella validates the username and checks that the corresponding GitHub account exists.
2. Sync your data. Once validated, Gitfella fetches your public profile, followers, and following lists directly from GitHub's API. No login or personal access token is required, since only public data is accessed.
3. View your results. Your profile, along with your Fans, Not Following Back, and Fellas lists, are displayed in sortable, filterable tables. Each entry links directly to the corresponding GitHub profile, so you can view any user's full details on GitHub itself.
4. Export raw data. For anyone who wants more than the formatted views, Gitfella includes a Raw Data page that displays the complete JSON response for your profile and each relationship category, with a one click copy option.

## GitHub API Rate Limits

Gitfella uses GitHub's public, unauthenticated REST API, which is limited to 60 requests per hour per IP address. Because syncing followers and following data requires paginated requests, accounts with a very large network may use a significant portion of this quota during a single sync. Gitfella tracks GitHub's rate limit headers directly and will notify you if a sync cannot be completed due to this limit, along with when you can try again.

## Features

- No account, sign in, or access token required
- Fetches and displays followers, following, fans, and mutual connections
- Full profile preview with avatar, bio, and public stats
- Sortable and paginated data tables for every relationship category
- Raw JSON data export for advanced use cases
- Light, dark, and system theme support
- Responsive layout for desktop and mobile
- Rate limit aware syncing with clear feedback on request usage

## Tech Stack

Gitfella is built with a modern, production oriented frontend stack:

- **Vite** : for build tooling and development server
- **React with TypeScript** : for the application layer
- **React Router** : for client side routing and navigation guards
- **TanStack Query** : for data fetching, caching, and request deduplication
- **Zod** : for schema based input validation
- **shadcn/ui** : for accessible, composable UI components
- **Tailwind CSS** : for styling
- **React Markdown** : for rendering static content pages

## Getting Started

### Prerequisites

- Node.js (version 18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/dulanjayabhanu/gitfella.git
cd gitfella
npm install
```

### Running Locally

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
npm run preview
```

## Roadmap

Gitfella is under active development. Some ideas being considered for future releases:

- Search and filtering within Fans, Not Following Back, and Fellas tables
- Bulk actions, such as opening multiple profiles at once from a selection
- Historical comparison between sync sessions to track changes over time
- Support for viewing another public GitHub username's network, not just your own
- Improved handling for accounts with very large follower and following counts

There are no fixed timelines for these items. Suggestions and feedback are welcome through the repository's issue tracker.

## Contributing

Contributions are welcome. Please read the [Contributing Guide](./CONTRIBUTING.md) for details on reporting issues, suggesting features, and submitting pull requests.

## Privacy

Gitfella does not use GitHub OAuth, access tokens, or any private account data. Your GitHub username is stored locally in your browser to remember your session, and no data you view is stored on any server. For full details, see the in app Privacy Policy and Terms of Service pages.

## License

This project is licensed under the [MIT](LICENSE) License.