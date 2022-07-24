# Kao Expo Typescript Boilerplate

This boilerplate was initialized with `expo-cli` and i choose `yarn` as package manager for faster installing cached packages. This boilerplate includes some default configuration like:

- `prettier` - **Code Formatter** that configured by `.prettierrc` file
- `eslint` - linter integrated with prettier config
- vscode shareable settings file - `.vscode/settings.json`
- `jest` & `jest-expo` configurations for typescript
- `husky` - **Git Hooks** with [`jest`](https://jestjs.io/docs/getting-started) test as pre-commit hook and [`git-cz`](https://github.com/streamich/git-cz) for preparing commit message
- `dontenv` & `expo-constants` for environment variable usage
- example file of `.env`
- react navigation libraries: `@react-navigation/native` and `@react-navigation/native-stack`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs `expo start` command. For emulator, run with `--ios` or `--android`

### `yarn test`

Runs jest test, use command `yarn test:update` or `yarn test --update` to update snapshot,
`yarn test` has been set as one of git hook command `pre-commit`

### `yarn prepare`

Runs `husky install` command to install new / updated Git Hooks in folder `.husky/*`

### `yarn lint`

Runs linter checking, `yarn lint --fix` has been set as one of git hook command `pre-commit`

## Folder Structures

```md
├── src                         # src folder
    ├── @types                  # definitions type folder
        ├── navigations         # navigations definitions type folder
            ├── root.d.ts       # every navigations should have a StackParamList & StacProps type
    ├── app                     # app folder / index folder
        ├── App.tsx             # whole app root
        ├── index.ts            # main file / App.tsx expo register
    ├── assets                  # assets folder
    ├── components              # global components folder
        ├── __tests__           # global components tests folder
    ├── contexts                # global contexts folder
    ├── hooks                   # global hooks folder
    ├── navigations             # navigations folder
        ├── root.ts             # navigations root file
    ├── screens                 # screens folder
        ├── __tests__           # screens tests folder
        ├── HomeScreen          # example of a screen folder
    ├── services                # services top folder
        ├── apis                # service api folder
        ├── constants           # services constants folder
        ├── utils               # services utils folder
            ├── __tests__       # services utils tests folder
    ├── styles                  # global styles folder
```
