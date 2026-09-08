# Security Policy

## Supported Versions

Gitfella does not currently maintain multiple versions. Security fixes are applied to the latest version on the `main` branch.

## Reporting a Vulnerability

If you discover a security vulnerability in Gitfella, please report it privately rather than opening a public issue.

You can report a vulnerability by opening a [private security advisory](https://github.com/dulanjayabhanu/gitfella/security/advisories/new) on GitHub, or by contacting the maintainer directly through the profile listed at [github.com/dulanjayabhanu](https://github.com/dulanjayabhanu).

Please include as much detail as possible, including steps to reproduce the issue, so it can be investigated and addressed promptly.

## Scope

Gitfella is a client side application that interacts only with GitHub's public REST API. It does not use authentication tokens, does not store data on any server, and does not have a backend or database. Reports related to third party services, such as GitHub's own API or infrastructure it depends on, such as Vercel, should be directed to those providers directly.

## Response

Reported vulnerabilities will be reviewed as soon as possible. Once a report is confirmed, a fix will be prioritized and released, and the reporter will be credited unless they request otherwise.