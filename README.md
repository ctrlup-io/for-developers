<h1 align="center">For developers</h1>

<p align="center">Ctrl Up Website for developers</p>

## **Introduction**

Ctrl Up have to talk to the developers (and all products/projects development team members).
This repository hosts a React application.

## **Contributing**

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

## **Available Scripts**

In the project directory, you can run:

### **`start`**

> ✅ **Prerequisites**  
> Set [required environment variables](README.md#environment-variables): `GOOGLE_MAP_API_KEY`, `FIREBASE_API_KEY`, `FIREBASE_APP_ID`, `FIREBASE_PROJECT_ID`, and `NODE_ENV`.

Watches your application files and builds your app for development when files change.

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

### **`commit`**

Runs the [`git-cz`](https://github.com/streamich/git-cz) CLI to generate commit messages according to the [_Conventional Commit specifications_](https://www.conventionalcommits.org/en/v1.0.0/#specification).

### **`format`**

Runs [Prettier](https://prettier.io/) with [basic configuration](https://prettier.io/docs/en/configuration.html#basic-configuration).

We recommend to use Prettier in your IDE, e.g. in Visual Studio code with [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### **`lint`**

Runs [ESLint](https://eslint.org/) with [standard configuration](https://standardjs.com/).

### **`build`**

> ✅ **Prerequisites**  
> Set [required environment variables](README.md#environment-variables): `GOOGLE_MAP_API_KEY`.

Builds app for production with [Remix](https://remix.run/docs/en/v1/other-api/dev#remix-build).

### **`release:dry`**

> ✅ **Prerequisites**  
> Set [required environment variables](README.md#environment-variables): `GITHUB_TOKEN`.

Runs [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) in dry-run mode. It allows you to preview the pending release.

## **Environment variables**

1. Create (or reset) a non-versioned [`.env` file](.env) using the template in [`.env.example` file](.env.example):

```sh
cp .env.example .env
```

2. Set the following environment variables:

- `GITHUB_TOKEN` to allow Semantic Release in [Dru-run mode](https://semantic-release.gitbook.io/semantic-release/usage/configuration#dryrun) to verify the repository push permission
- `NODE_ENV` to `development` to take advantage of the Remix live reload functionality.
- `GOOGLE_MAP_API_KEY` to use the [Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
- `FIREBASE_API_KEY`, `FIREBASE_APP_ID`, and `FIREBASE_PROJECT_ID` to fetch data from [Firebase](https://firebase.google.com/docs/reference/js)
