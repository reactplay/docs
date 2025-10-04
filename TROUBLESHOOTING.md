## Troubleshooting Guide

Encountering setup or runtime issues while contributing to ReactPlay documentation? Here are solutions to the most common problems faced by the community.

***

### 1. `npm install` or `yarn install` Not Working

If running `npm install` or `yarn install` fails with errors:

- Ensure Node.js (version 14+) and npm/yarn are installed. Run:

  ```
  node -v
  npm -v
  yarn -v
  ```

- Delete `node_modules` and the lock file, then install again:

  ```
  rm -rf node_modules package-lock.json yarn.lock
  npm install
  # or
  yarn install
  ```

- If you see permission errors (EACCES), try using a Node version manager like nvm:

  ```
  nvm install --lts
  nvm use --lts
  npm install
  ```

- Ensure you are in the correct directory (where `package.json` is present).

- If using a company proxy or firewall, configure npm/yarn proxies:

  ```
  npm config set proxy http://proxy.company.com:8080
  npm config set https-proxy http://proxy.company.com:8080
  ```

### 2. Lots of Console Errors/Warnings

While running `yarn start` or `npm run start`, you may see red or yellow messages.

- **Dependency warnings**: Most yellow warnings are safe to ignore, but make sure dependencies are up-to-date. Run:

  ```
  npm outdated
  npm update
  # or
  yarn upgrade
  ```

- **Breaking errors** (e.g., "module not found"):

  - Check if all dependencies are installed: `yarn install` or `npm install`
  - Verify your Node.js version matches project requirements.
  - Try clearing the cache:

    ```
    npm cache clean --force
    yarn cache clean
    ```

- **Custom errors in documentation**:

  - Double-check changes in `docs/` directory.
  - Make sure no files are missing or misnamed.
  - Review the error stack trace for file/line number hints.

### 3. Port Already in Use

If you get the error "Port 3000 is already in use":

- Stop any other processes using this port:

  ```
  npx kill-port 3000
  ```

- Change the port with:

  ```
  PORT=4000 yarn start
  ```

### 4. Unable to Push/Commit

- Make sure you have forked the repo and are working on your own branch.
- If you see permission denied errors for git operations, check your SSH key setup with GitHub.
- Sync your fork with the upstream repository:

  ```
  git remote add upstream https://github.com/reactplay/docs
  git fetch upstream
  git merge upstream/main
  ```

### 5. Outdated Dependencies or Build Fails

- Run:

  ```
  # For npm
  npm audit fix
  npm install

  # For yarn
  yarn install --check-files
  ```

- Delete and reinstall `node_modules` if issues persist.

### 6. Still Need Help?

If the above solutions do not resolve your problem:

- Copy the complete error message.
- Make sure to mention:
  - Steps performed
  - OS and Node/npm/yarn versions

Then open a new issue or ask in the ReactPlay Discord/Community channels for support.

***

Feel free to contribute additional solutions to this guide as new issues are discovered by the community!

***

This guide helps contributors quickly resolve frequent problems and encourages a positive contribution experience.