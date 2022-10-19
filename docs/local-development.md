---
sidebar_position: 2
---

# Local Development

You may want to set up the `react-play` repo for the following reasons:

- You want to create a new play (A play is a React project) or want to edit an existing play as a contributor. Please check the [Create a Play Guide](/docs/create-play) for more details. Also, please check the [Contribution Guide](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md) to get started.

- You want to contribute to the `react-play` repo in general. Please check the [Contribution Guide](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md) to get started.

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
```

Or

```bash
yarn install
```

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

Use the following command to start the app in the development mode:

```bash
npm start
```

Or

```bash
yarn start
```

It runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.
