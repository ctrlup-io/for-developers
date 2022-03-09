<h1 align="center">For developers</h1>

<p align="center">Ctrl Up Website for developers</p>

## Introduction

Ctrl Up have to talk to the developers (and all products/projects development team members).
This repository hosts a React application.

## Contributing

The best way to achieve this is together! That's why we are on GitHub. We would love contributions from the community (bug reports, feature requests, suggestions, Pull Requests, whatever you want!).

[Yarn](https://classic.yarnpkg.com/en/docs/cli/) is used as package manager. [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) is used to manage the whole package release workflow.

Application architecture is based on [Remix](https://remix.run/docs). Local development server and deployment are handled with [Netlify CLI](https://docs.netlify.com/cli/get-started/).

To setup your local dev environment:

1. Install [Yarn](https://classic.yarnpkg.com/en/docs/install)

2. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
yarn global add netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
yarn global add netlify-cli@latest
```

3. Clone repository:

```sh
git clone git@github.com:ctrlup-io/for-developers.git
cd for-developers
```

4. Install dependencies:

```sh
yarn install
```

5. See [more available scripts](README.md#scripts)

## Available Scripts

In the project directory, you can run:

### `start`

Watches your application files and builds your app for development when files change.

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

### `commit`

Runs the [`git-cz`](https://github.com/streamich/git-cz) CLI to generate commit messages according to the [_Conventional Commit specifications_](https://www.conventionalcommits.org/en/v1.0.0/#specification).

### `format`

Runs [Prettier](https://prettier.io/) with [basic configuration](https://prettier.io/docs/en/configuration.html#basic-configuration).

We recommend to use Prettier in your IDE, e.g. in Visual Studio code with [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### `lint`

Runs [ESLint](https://eslint.org/) with [standard configuration](https://standardjs.com/).

### `build`

Builds app for production with [Remix](https://remix.run/docs/en/v1/other-api/dev#remix-build).

### `release:dry`

Runs [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) in dry-run mode. It allows you to preview the pending release.

You have to set `NPM_TOKEN` and `GITHUB_TOKEN` in `.env` file.
