# Developer Notes

## Global dependencies

- `nodejs` version `v16.15.0`
- `yarn` version `1.22.17`
- `npm` version `8.10.0`
- `expo-cli` version `5.4.11`

## Commands and Steps to setup this boilerplate

- run expo init command
  ```sh
  expo init kao-expo-typescript-boilerplate --typescript --yarn
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
- install navigators and its compatible dependencies using expo-cli
  ```sh
  yarn add @react-navigation/native
  yarn add @react-navigation/native-stack
  expo install react-native-screens react-native-safe-area-context
  expo install react-native-gesture-handler
  ```
-
