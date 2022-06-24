# Kao Expo Typescript Template

This template was initialized with `expo-cli` and i choose `yarn` as package manager for faster installing cached packages. This template includes some default configuration like:

- `prettier` - **Code Formatter** that configured by `.prettierrc` file
- vscode shareable settings file - `.vscode/settings.json`
- `jest` & `jest-expo` configurations for typescript
- `husky` - **Git Hooks** with [jest](https://jestjs.io/docs/getting-started) test as pre-commit hook and [git-cz](https://github.com/streamich/git-cz) for preparing commit message
- `dontenv` & `expo-constants` for environment variable usage
- example file of `.env`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs `expo start` command

### `yarn test`

Runs jest test, use command `yarn test -u` to update snapshot

### `yarn prepare`

Runs `husky install` command to install new / updated Git Hooks in folder `.husky/*`

### commands and steps i used to setup this template

Before initializing this template, i'm using:

- `nodejs` version `v16.15.0`
- `yarn` version `1.22.17`
- `npm` version `8.10.0`
- `expo-cli` version `5.4.11`

Commands and steps are:

- run expo init command
  ```sh
  expo init kao-expo-typescript-template --typescript --yarn
  ```
- setup prettier config file `.prettierrc`
- setup vscode config file `.vscode/settings.json`
- install testing framework `jest` by `expo-cli`.
  **It's important** for using `expo install` and not `yarn add` to install the compatible version of jest-expo for the project
  ```sh
  expo install jest jest-expo
  yarn add @types/jest
  ```
- setup `jest` configuration in `package.json`
  ```json
  {
    "scripts": {
      // other scripts...
      "test": "jest"
    },
    "jest": {
      "preset": "jest-expo",
      "moduleFileExtensions": ["ts", "tsx", "js", "json", "jsx", "node"]
    }
  }
  ```
- install `react-test-renderer` so i can render app / component in the testing files.
  **It's important** to install the same version of `react-test-renderer` with `react` version
  ```sh
  yarn add react-test-renderer@17.0.2 @types/react-test-renderer@17.0.2
  ```
- create a single test file `App.test.tsx`
- install `husky` as Git Hooks
  ```sh
  yarn add husky
  ```
- setup `yarn prepare` command to install husky hooks
  ```json
  {
    "scripts": {
      // other scripts...
      "prepare": "husky install"
    }
  }
  ```
- create husky Git Hooks file `.husky/pre-commit` and add `yarn test` command in it

  ```sh
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  yarn test
  ```

- create husky Git Hooks for preparing commit message using [git-cz](https://github.com/streamich/git-cz) in file `.husky/prepare-commit-msg`

  ```sh
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  exec < /dev/tty && npx git-cz --hook
  ```

- install git hooks
  ```sh
  yarn prepare
  ```
- install `dotenv` and `expo-constants`
  ```sh
  yarn add dotenv expo-constants
  ```
- change file `app.json` to `app.config.ts`
- import `dotenv/config` and add new key `extra` in `app.config.ts` for environment variable usage

  ```ts
  import "dotenv/config";

  export default {
    expo: {
      // other configs...
      extra: {
        APP_NAME: process.env.APP_NAME || ""
      }
    }
  };
  ```

- create `.env` file and `.env.example`
