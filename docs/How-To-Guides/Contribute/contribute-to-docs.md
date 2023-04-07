---
sidebar_position: 1
---

# Contribute to Docs

[ReactPlay Docs](docs.reactplay.io/) is our official documentation for ReactPlay. As the name suggests, it includes documentation of various aspects and features of ReactPlay.

If you've come so far, _you_ already consider yourself a part of _ReactPlay_. And guess what, we have accepted you too. We are family!! 🎉. Henceforth we grow together.

:::note
Before getting started, please read [CONTRIBUTING](https://github.com/reactplay/docs/blob/main/CONTRIBUTING.md) guide for details on our [CODE OF CONDUCT](https://github.com/reactplay/docs/blob/main/CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.
:::

:::tip
New to open-source? Follow [this guide](https://opensource.guide/how-to-contribute/) to jumpstart your Open Source journey 🚀
:::

## Getting started

Contribution marks the beginning of our first steps in growing together. Below is a list of probable ways in which you can contribute to the [reactplay/docs](https://github.com/reactplay/docs) repo.

- write documentation for various parts of ReactPlay
- suggest changes to the existing docs
- improve the documentation

## Setting up

To start contributing you must first set up this repository on your local machine. Follow the steps below to set up the repository on your local machine.

### 🍴 Fork and Clone the Repo

1. Go to [reactplay/docs](https://github.com/reactplay/docs) and <span className="fork"><svg className="svg" aria-hidden="true" height="14" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
   <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
   </svg> Fork</span> the repo.
2. Click the <span className="code"><svg className="svg" aria-hidden="true" height="14" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
   <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
   </svg>Code</span> and copy the URL

```bash
   git clone <URL_LINK>
```

3. Change directory into the folder where you have cloned the repo.

```bash
cd <directory-name>
```

### ⬆ Set Upstream

We recommend setting an upstream repo to make pulling and fetching easier. Execute the following command in the terminal:

```bash
git remote add upstream https://github.com/reactplay/docs
```

Check if the upstream has been added by executing the following command:

```bash
git remote -v
```

You should see the following displayed in your terminal.

```bash
origin  https://github.com/<username>/reactplay-docs.git (fetch)
origin  https://github.com/<username>/reactplay-docs.git (push)
upstream        https://github.com/reactplay/docs.git (fetch)
upstream        https://github.com/reactplay/docs.git (push)
```

### 🌴 Create a branch

Ideally, you must create a separate branch for each issue you are working on. Here is how to create a new branch locally.

```bash
git checkout -b <branch-name>
```

> The `-b` command switches the current branch to the newly created branch.

Keep the branch name clear and straightforward.

🎊 Congratulations! You are ready to start working on the issue!

### 👨‍💻 Make changes

You need to install dependencies before you start working on the website. Make sure you are in the same directory as your repo's `package.json` and execute either of the following commands:

```bash
yarn install
```

> We recommend using Yarn. But feel free to use NPM as well:

```bash
npm install
```

To start a local development server, enter the following command:

```bash
yarn start
```

Or, for NPM:

```bash
npm run start
```

The local development server will start on [localhost:3000](http://localhost:3000/)

### 🔒 Commit and Push

You can save your changes by committing them. Committing once you have made significant changes to the repo is recommended. Execute the following commands:

```bash
git add .
git commit -m "<message>"
git push -u origin <branch-name>
```

The `message` should be a descriptive text defining your changes since the last commit.
The `branch-name` is the branch name you created before working on this issue.

You can create multiple commits before pushing the code.

### 🙌 Pull Request

When you have resolved the issue, its time to make a pull request.
Open the forked repo from GitHub web and go to `Pull Requests` tab. Then click the bright green `New Pull Request` button.

Select the _base_ and _compare_ branches carefully. Base is the branch you are merging your changes with whereas Compare is the branch you made your changes to.
![image](https://user-images.githubusercontent.com/53049546/222949792-0d9c1739-3692-4753-8880-2bb1837a43ac.png)

Click `Create Pull Request` and wait until we review and merge it.

Until it gets merged, browse [ReactPlay](https://reactplay.io/) and [contribute](https://github.com/reactplay/react-play) to it.
