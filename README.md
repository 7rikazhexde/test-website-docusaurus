# test-website-docusaurus

Static sites generated using [Docusaurus](https://docusaurus.io/) for experimental purposes.

[![Deploy to GitHub Pages](https://github.com/7rikazhexde/test-website-docusaurus/actions/workflows/deploy.yml/badge.svg)](https://github.com/7rikazhexde/test-website-docusaurus/actions/workflows/deploy.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/204140ba-737c-4135-b052-9dfcaff737a8/deploy-status)](https://app.netlify.com/sites/7rikazhexde-test-website-docusaurus/deploys)

## URL

Content(website) is managed by GitHub Pages and Netlify.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Visit-blue?style=for-the-badge&logo=github)](https://7rikazhexde.github.io/test-website-docusaurus/) [![Netlify](https://img.shields.io/badge/Netlify-Visit-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://7rikazhexde-test-website-docusaurus.netlify.app/)

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
