# ReactPlay Docs
Official documentation for ReactPlay.
 
 Check ReactPlay [Official Repository](https://github.com/reactplay/react-play) for more information.

## What is ReactPlay
![ReactPlay](https://raw.githubusercontent.com/reactplay/react-play/main/src/images/og-image.png)
`react-play` is an open-source web app that helps you learn ReactJS faster with a hands-on practice model. It is a collection of ReactJS projects you can use to learn ReactJS.

Is that all? Nope. You can also create your projects and share them with the world. The best part is that the ReactJS experts will review your project code before it gets part of the ReactPlay app. Isn't that a pure WIN-WIN?

This repository serves a documentation for ReactPlay. It includes information on how to perform various activities on the platform.

## 🤩 How to contribute to this repo?

You can contribute to this repo in several ways:
1. Write documentation for the various parts of ReactPlay
2. Suggest changes to the existing docs
3. Improve the documentation website

To contribute, you must set up this repository on your local machine. Here is a brief guide on setting up the repo on your local machine:

> Please read [CONTRIBUTING](https://github.com/reactplay/docs/blob/main/CONTRIBUTING.md) for details on our [CODE OF CONDUCT](https://github.com/reactplay/docs/blob/main/CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

**💡 New to Open Source? Follow [this guide](https://opensource.guide/how-to-contribute/) to jumpstart your Open Source journey 🚀**

### 🍴 Fork and Clone the Repo
First, you need to fork this repo. You can do this by clicking the `Fork` button on the top right corner of the repo. If you are new to forking, please watch this [YouTube Guide](https://www.youtube.com/watch?v=h8suY-Osn8Q) to get started.

Once forked, click the bright green `<> Code` button and copy the URL.

Now on your local machine, open the destination directory in the terminal and execute the following command:

```bash
git clone <URL_LINK>
```

Here the `URL_LINK` is the same link you coped in the previous step.


Please change the directory after cloning the repository using the ```cd <directory-name>``` command.

### ⬆ Set Upstream
We recommend setting an upstream repo to make pulling and fetching easier. Execute the following command in the terminal:

```bash
git remote add upstream https://github.com/reactplay/docs
```

Check if the upstream has been added by executing the following command:

```bash
git remote -v
```

### 🌴 Create a branch
Ideally, you must create a separate branch for each issue you are working on. Here is how to create a new branch locally.

```bash
git checkout -b <branch-name>
``` 

Keep the branch name clear and straightforward. The `-b` command switches the current branch to the newly created branch. 

You are ready to start working on the issue!

### 👨‍💻 Make changes
You need to install dependencies before you start working on the website. Make sure you are in the same directory as your repo's `package.json` and execute either of the following commands:

```bash
yarn install
```

We recommend using Yarn. But feel free to use NPM as well:
```
npm install
```

To start a local development server, enter the following command:

```bash
yarn start
````

Or, for NPM:
```bash
npm run start
```

The local development server will start on localhost:3000

### 🔒 Commit and Push
You can save your changes by committing them. Committing once you have made significant changes to the repo is recommended. Execute the following commands:

```bash
git add .
git commit -m "<massage>"
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


