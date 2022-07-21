# Developer Notes

## Global Dependencies

- `nodejs` version `v16.15.0`
- `yarn` version `1.22.17`
- `npm` version `8.10.0`
- `expo-cli` version `5.4.11`

## Init Project

run expo init command

```sh
expo init kao-expo-typescript-boilerplate --yarn
# choose blank typescript template
```

create prettier config file [`.prettierrc`](../.prettierrc);

```json
{
  "semi": true, // always use sem-colon if necessary
  "trailingComma": "none", // never have any trailing comma
  "singleQuote": false, // always use double quote
  "printWidth": 120, // maximum character column in a single line of code
  "tabWidth": 2, // tab width equals to 2 spaces
  "bracketSpacing": true, // space bracket with its content
  "bracketSameLine": true, // set close bracket in the same position with open bracket
  "arrowParens": "always" // never use x => x on arrow function
}
```

setup vscode config file [`.vscode/settings.json`](../.vscode/settings.json)

## Testing Utilities

install testing framework `jest` by `expo-cli`.
**It's important** for using `expo install` and not `yarn add` to install the compatible version of jest-expo for the project

```sh
expo install jest jest-expo
yarn add --dev @types/jest
```

setup `jest` configuration in `package.json`

```json
{
  "scripts": {
    // ...other scripts
    "test": "jest",
    "test:clearCache": "jest --clearCache",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watchAll"
  },
  "jest": {
    "preset": "jest-expo",
    "moduleFileExtensions": ["ts", "tsx", "js", "json", "jsx", "node"]
  }
}
```

install `react-test-renderer` so i can render app / component in the testing files.
**It's important** to install the same version of `react-test-renderer` with `react` version

```sh
yarn add --dev react-test-renderer@17.0.2 @types/react-test-renderer@17.0.2
```

## Git Hook

install `husky` as Git Hooks

```sh
yarn add --dev husky
```

setup `yarn prepare` command to install husky hooks

```json
{
  "scripts": {
    // other scripts...
    "prepare": "husky install"
  }
}
```

create husky Git Hooks file `.husky/pre-commit` and add `yarn test` command in it

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn test
```

create husky Git Hooks for preparing commit message using [git-cz](https://github.com/streamich/git-cz) in file `.husky/prepare-commit-msg`

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

exec < /dev/tty && npx git-cz --hook
```

install those created git hooks to current active `.git` directory

```sh
yarn prepare
```

## Linter

install eslint, prettier and eslint-config-universe

```sh
yarn add eslint prettier slint-config-universe
```

install `eslint-config-universe` for easier setup eslint rules config in react-native.
`eslint-config-universe` includes a lot of `eslint rules` that suits the needs for react native development

```sh
yarn add eslint-config-universe
```

set `scripts` to use linter command in `package.json`

```json
{
  "scripts": {
    // ...other scripts
    "lint": "eslint '*/**/*.{js,ts,tsx}'"
  }
}
```

create `.eslintrc` and extends `universe/native` alseo `prettier` in eslint config file.

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": ["universe/native", "prettier"],
  "plugins": ["import"],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error"]
  }
}
```

edit the `pre-commit` git hook and add `yarn lint --fix` command before `yarn test`, so everytime i run git commit, it will first run the linter check and then run the tests.
now, your new `pre-commit` git hook should looks like this

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint --fix
yarn test
```


## Environment Variables

install `dotenv` and `expo-constants`, expo use expo-constants to handle passing envrionment variable to the app
  ```sh
  yarn add dotenv expo-constants
  ```

create `.env` file and `.env.example`
```
APP_NAME='Kao Expo Typescript Boilerplate'
APP_ENV='development'
```

change file `app.json` to `app.config.ts`
import `dotenv/config` and add new key `extra` in `app.config.ts` for environment variable usage

  ```ts
  import "dotenv/config";

  export default {
    expo: {
      // ...other configs
      extra: {
        APP_NAME: process.env.APP_NAME || ""
      }
    }
  };
  ```



## Rect Navigation

install navigators and its compatible dependencies using expo-cli
  ```sh
  yarn add @react-navigation/native
  yarn add @react-navigation/native-stack
  expo install react-native-screens react-native-safe-area-context
  expo install react-native-gesture-handler
  ```
fixing `type` issue with `Sack.Navigator cannot be used as JSX component` by installing differen react types version
  ```sh
  yarn add @types/react@18.0.8
  ```


## Folder Structure

create this folder structure

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


## Relative Paths

#### Setup Relative Path Aliases

setup setup relative paths in `tsconfig.json` file
```json
{
  "compilerOptions": {
    // ...other configs
    "baseUrl": ".",
    "paths": {
      "@@types/*": ["./src/@types/*"],
      "@assets/*": ["./src/assets/*"],
      "@components/*": ["./src/components/*"],
      "@contexts/*": ["./src/contexts/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@navigations/*": ["./src/navigations/*"],
      "@screens/*": ["./src/screens/*"],
      "@services/*": ["./src/services/*"],
      "@styles/*": ["./src/styles/*"]
    }
  }
}
```

install `babel-plugin-module-resolver` as dev devependecies,
`babel-plugin-module-resolver` is for babel resolving relative paths.
```sh
yarn add --dev babel-plugin-module-resolver
```

add `module-resolver` as plugin in `babel.config.js` and set `root` and `alias`

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: "./",
          alias: {
            "@@types": "./src/@types",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@hooks": "./src/hooks",
            "@navigations": "./src/navigations",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@styles": "./src/styles"
          }
        }
      ]
    ]
  };
};
```

#### Sorting Imports

 `eslint-config-universe` includes `eslint-plugin-import`, so i don't need to install it again tho i using `import/order` rules in my eslint config
 
 set `import/order` rules in eslint, and set all relative paths ***(aliases)*** as `internal` group.
 the sorting stack is set by `gruops` property
```json
{
  // ...other eslint rules
  "import/order": [
    "warn",
    {
      "pathGroups": [
        {
          "pattern": "@@types/**",
          "group": "internal"
        },
        {
          "pattern": "@assets/**",
          "group": "internal"
        },
        {
          "pattern": "@components/**",
          "group": "internal"
        },
        {
          "pattern": "@contexts/**",
          "group": "internal"
        },
        {
          "pattern": "@hooks/**",
          "group": "internal"
        },
        {
          "pattern": "@navigations/**",
          "group": "internal"
        },
        {
          "pattern": "@screens/**",
          "group": "internal"
        },
        {
          "pattern": "@services/**",
          "group": "internal"
        },
        {
          "pattern": "@styles/**",
          "group": "internal"
        }
      ],
      "pathGroupsExcludedImportTypes": ["builtin"],
      "groups": [["builtin", "external"], "internal", ["parent", "sibling", "index"], "unknown"],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc"
      }
    }
  ]
}
```

with configuration like this, all imports should look like this
```tsx
import { useState } from "react"; // builtin, external import

import ErrorBoundary from "@components/ErrorBoundary"; // internal import
import Fetcher from "@services/api/fetcher";

import Form from "./Form.tsx"; // parent, sibling, index import

```

