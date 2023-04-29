---
sidebar_position: 3
---

# Local Development

You may want to set up the `react-play` repo for the following reasons:

- Please check the [Contribution Guide](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md) to get started with contributing to the `react-play` repo in general.

- You want to create a new play (A play is a React project) or want to edit an existing play as a contributor. Please check the [Create a Play Guide](./How-To-Guides/how-to-create-play.md) for more details.

Here is a quick overview of the `react-play` repo setup:

## Fork and Clone the Repo

First, you need to fork the `react-play` repo. You can do this by clicking the `Fork` button on the top right corner of the repo. If you are new to forking, please watch this [YouTube Guide](https://www.youtube.com/watch?v=h8suY-Osn8Q) to get started.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/h8suY-Osn8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Once forked, you can clone the repo by clicking the `Clone or Download` button on the top right corner of the forked repo.

Please change the directory after cloning the repository using the `cd <folder-name>` command.

## Install Dependencies

Next, install the dependencies by running the following command in the `react-play` repo:

```bash
npm install

or

yarn install
```

<details>
<summary>If you don't have <code>yarn</code> installed on your PC, follow the steps below to install it.</summary>

**Windows**

1. open your command prompt as administrator.
2. write `corepack enable` and hit enter.
3. then `npm install --global yarn`

**Linux**

1. open the terminal and hit `npm install --global yarn`

**MacOS**

1. open the terminal and hit `npm install --global yarn`
   or
   `brew install yarn`

**Or Download Package**

If you are unable to install yarn following the above-mentioned process, then you can simply download the package and install it. Visit the official website of Yarn; there you can just expand the "Alternative" section and it will ask for the version to download for Windows, Linux, or Mac.
`https://classic.yarnpkg.com/en/docs/install#windows-stable`

</details>

> **Note**: `ReactPlay` runs on React 18. However, some of our dependencies are yet to upgrade to version 18. So please use the following command when you face difficulties installing the dependencies.

```bash
npm install --legacy-peer-deps
```

## Create a `.env` file at the root of your project folder with the following content,

```bash
REACT_APP_NHOST_BACKEND_URL=https://rgkjmwftqtbpayoyolwh.nhost.run/
REACT_APP_NHOST_VERSION=v1
REACT_APP_NHOST_ENDPOINT=graphql
```

## Start the Development Mode

Use the following command to start the app in development mode:

```bash
npm start

or

yarn start
```

**Note**: The `start` script automatically invokes "linters" process. Should you need to run the app without `lint` use `start:nolint` instead.
However, make sure that you run `start` the script at least once before committing your code. Code with linter error may not be reviewed.

It runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

## Format and lint the code

Use the following command to format and lint the code:

**Format the code**

```bash
yarn run format

or

npm run format
```

**Lint the code to check the linting issue**

```bash
yarn run lint

or

npm run lint
```

**To fix the linting issue**

```bash
yarn run lint:fix

or

npm run lint:fix
```

## Build the App for Production

Use the following command to build the app for production:

```bash
yarn build

or

npm build
```

It builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Test App Locally (E2E with Cypress)

Use the following command to run cypress locally:

```bash
yarn cypress:open

or

npm cypress:open
```

It will open the cypress dashboard, through which you need to select `E2E Testing`.
Once you are done with the selection you will get the option to choose your preferred browser in which you want to run the test.!
Once you select the browser you need to click on `Start E2E Testing in <SELECTED_BROWSER_NAME>.` The chosen browser will pop up you can see a list of cypress tests, click on the test to start testing.!
