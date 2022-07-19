# Kao Expo Typescript Boilerplate

This boilerplate was initialized with `expo-cli` and i choose `yarn` as package manager for faster installing cached packages. This boilerplate includes some default configuration like:

- `prettier` - **Code Formatter** that configured by `.prettierrc` file
- vscode shareable settings file - `.vscode/settings.json`
- `jest` & `jest-expo` configurations for typescript
- `husky` - **Git Hooks** with [jest](https://jestjs.io/docs/getting-started) test as pre-commit hook and [git-cz](https://github.com/streamich/git-cz) for preparing commit message
- `dontenv` & `expo-constants` for environment variable usage
- example file of `.env`
- react navigation libraries: `@react-navigation/native` and `@react-navigation/native-stack`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs `expo start` command. For emulator, run with `--ios` or `--android`

### `yarn test`

Runs jest test, use command `yarn test -u` to update snapshot

### `yarn prepare`

Runs `husky install` command to install new / updated Git Hooks in folder `.husky/*`
